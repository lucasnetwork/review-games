import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameController } from 'src/Game/game.controller';
import { Game } from 'src/database/Entities/Game';
import { GameService } from './game.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Company } from 'src/database/Entities/Company';

@Module({
  imports: [
    TypeOrmModule.forFeature([Game, Company]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename(req, file, callback) {
          const extention = extname(file.originalname);
          const randomName = Array(16)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return callback(null, `${randomName}${extention}`);
        },
      }),
    }),
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModules {}
