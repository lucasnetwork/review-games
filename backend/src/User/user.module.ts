import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/Entities/User';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Company } from 'src/database/Entities/Company';

@Module({
  imports: [TypeOrmModule.forFeature([User, Company])],
  exports: [TypeOrmModule, UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModules {}
