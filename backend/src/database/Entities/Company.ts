import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Game } from './Game';
import { User } from './User';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  file_url: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => Game, (game) => game.company)
  games: Game;
}
