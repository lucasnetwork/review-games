import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GameController } from './Controllers/game.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, GameController],
  providers: [AppService],
})
export class AppModule {}
