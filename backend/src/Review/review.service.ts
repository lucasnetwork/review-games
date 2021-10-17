import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from 'src/database/Entities/Review';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
  ) {}

  create(data: Review): Promise<Review> {
    return this.reviewRepository.save(data);
  }

  findAll(): Promise<Review[]> {
    return this.reviewRepository.find({ relations: ['game', 'user'] });
  }
}
