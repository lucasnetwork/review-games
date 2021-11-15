import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Review } from 'src/database/Entities/Review';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  async findAll(): Promise<Review[]> {
    const reviews = await this.reviewService.findAll();
    return reviews;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: Review, @Res() res: Response) {
    try {
      const existReviewUsertAndGame = await this.reviewService.getByUserAndGame(
        Number(data.game),
        Number(data.user),
      );
      if (existReviewUsertAndGame) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'review already exist' });
      }
      const response = await this.reviewService.create(data);
      return res.status(HttpStatus.CREATED).json(response);
    } catch {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
  }
}
