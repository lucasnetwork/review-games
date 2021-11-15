import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/database/Entities/Game';
import { Review } from 'src/database/Entities/Review';
import { User } from 'src/database/Entities/User';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Game, User])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModules {}
