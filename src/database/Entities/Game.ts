import {
  Entity,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Company } from './Company';

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

  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;
}
