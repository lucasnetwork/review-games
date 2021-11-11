import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../database/Entities/Company';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: string): Promise<Company> {
    return this.companyRepository.findOne(id, { relations: ['games'] });
  }

  findOneByUser(id: number): Promise<Company> {
    return this.companyRepository.findOne(
      {
        user: {
          id,
        },
      },
      { relations: ['user'] },
    );
  }

  create(data): Promise<Company> {
    return this.companyRepository.save(data);
  }
}
