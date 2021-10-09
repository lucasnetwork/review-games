import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/User/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log('validateUser');
    console.log({ email, password });
    const user = await this.usersService.findOneByEmail(email);
    console.log(user);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.userId };
    return {
      acess_token: this.jwtService.sign(payload),
    };
  }
}
