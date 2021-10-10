import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModules } from './Company/company.module';
import { UserModules } from './User/user.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './appController';

@Module({
  imports: [TypeOrmModule.forRoot(), CompanyModules, AuthModule, UserModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
