import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModules } from 'src/User/user.module';
import { LocalStrategy } from './strategys/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategys/jwt.strategy';

@Module({
  imports: [
    UserModules,
    PassportModule,
    JwtModule.register({
      secret: 'process.env.secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
