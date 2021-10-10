import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/database/Entities/Game';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  findOne(id: string): Promise<Game> {
    return this.gameRepository.findOne(id);
  }

  create(data: Game): Promise<Game> {
    return this.gameRepository.save(data);
  }
}
