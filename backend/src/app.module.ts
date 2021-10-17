import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModules } from './Company/company.module';
import { UserModules } from './User/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './appController';
import { GameModules } from './Game/game.module';
import { ReviewModules } from './Review/review.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CompanyModules,
    AuthModule,
    UserModules,
    GameModules,
    ReviewModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
