import {
  Entity,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Company } from './Company';
import { Review } from './Review';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  file_url: string;

  @ManyToOne(() => Company, (company) => company.games)
  company: Company;

  @OneToMany(() => Review, (review) => review.game)
  reviews: Review[];
}
