import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/database/Entities/Company';
import { Game } from 'src/database/Entities/Game';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  findOne(id: string): Promise<Game> {
    return this.gameRepository.findOne(id, {
      relations: ['company', 'reviews'],
    });
  }

  removeFile(id: number) {
    return this.gameRepository.delete({ id });
  }

  findCompanyByUserId(id: number): Promise<Company> {
    return this.companyRepository.findOne(
      {
        user: {
          id,
        },
      },
      {
        relations: ['user'],
      },
    );
  }

  create(data): Promise<Game> {
    return this.gameRepository.save(data);
  }
}
