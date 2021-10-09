import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/Entities/User';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(data: User): Promise<User> {
    return this.userRepository.save(data);
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }
  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }
}
