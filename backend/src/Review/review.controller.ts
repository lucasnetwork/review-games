import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
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

  @Post()
  async create(@Body() data: Review, @Res() res: Response) {
    try {
      const response = await this.reviewService.create(data);
      return res.status(HttpStatus.CREATED).json(response);
    } catch {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
  }
}