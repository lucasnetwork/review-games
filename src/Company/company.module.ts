import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../database/Entities/Company';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  exports: [TypeOrmModule],
})
export class CompanyModules {}
