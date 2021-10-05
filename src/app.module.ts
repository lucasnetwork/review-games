import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GameController } from './Controllers/game.controller';
import { AppService } from './app.service';
import { Company } from './database/Entities/Company';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModules } from './Company/company.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CompanyModules],
  controllers: [AppController, GameController],
  providers: [AppService],
})
export class AppModule {}
