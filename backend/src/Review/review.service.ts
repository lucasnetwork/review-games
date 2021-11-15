import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/database/Entities/Game';
import { Review } from 'src/database/Entities/Review';
import { User } from 'src/database/Entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  create(data: { game: number; review: number; user: number }) {
    return this.reviewRepository.save({
      game: {
        id: data.game,
      },
      review: data.review,
      user: {
        id: data.user,
      },
    });
  }

  save(data: Review) {
    return this.reviewRepository.save(data);
  }

  findAll(): Promise<Review[]> {
    return this.reviewRepository.find({ relations: ['game', 'user'] });
  }

  getByUserAndGame(user: number, game: number) {
    return this.reviewRepository.findOne({
      where: {
        user: {
          id: user,
        },
        game: {
          id: game,
        },
      },
    });
  }

  verifyUser(id: number) {
    return this.userRepository.findOne(id);
  }

  verifyGame(id: number) {
    return this.gameRepository.findOne(id);
  }
}
