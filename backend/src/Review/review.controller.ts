import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
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
  async create(
    @Body()
    data: {
      gameId: number;
      review: number;
    },
    @Res() res: Response,
    @Req() req,
  ) {
    try {
      const existUser = await this.reviewService.verifyUser(req.user.userId);

      if (!existUser) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'User not exist' });
      }

      const existGame = await this.reviewService.verifyGame(data.gameId);

      if (!existGame) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'Game not exist' });
      }
      const existReviewUsertAndGame = await this.reviewService.getByUserAndGame(
        Number(req.user.userId),
        Number(data.gameId),
      );
      if (existReviewUsertAndGame) {
        existReviewUsertAndGame.review = data.review;

        const response = await this.reviewService.save(existReviewUsertAndGame);
        return res.status(HttpStatus.CREATED).json(response);
      }
      const response = await this.reviewService.create({
        game: data.gameId,
        review: data.review,
        user: req.user.userId,
      });
      return res.status(HttpStatus.CREATED).json(response);
    } catch {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
  }
}
