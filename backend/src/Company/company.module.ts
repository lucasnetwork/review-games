import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Company } from '../database/Entities/Company';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename(req, file, callback) {
          const extention = extname(file.originalname);
          console.log(extention);
          const randomName = Array(16)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return callback(null, `${randomName}${extention}`);
        },
      }),
    }),
  ],
  exports: [TypeOrmModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModules {}
