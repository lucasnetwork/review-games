import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Game } from './Game';
import { User } from './User';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  review: number;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @ManyToOne(() => Game, (game) => game.reviews)
  game: Game;
}
