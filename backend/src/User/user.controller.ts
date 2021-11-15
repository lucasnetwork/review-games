import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/database/Entities/User';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data, @Res() res: Response) {
    try {
      const existUser = await this.userService.findOneByEmail(data.email);
      if (existUser) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'User already exist' });
      }
    } catch {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
    try {
      // pass to the models when know
      const values = data;
      const hashPassword = await bcrypt.hash(
        values.password,
        Number(process.env.saltRound),
      );
      values.password = hashPassword;
      await this.userService.create(data);
    } catch (e) {
      console.log(e);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req, @Res() res: Response) {
    try {
      const existUser = await this.userService.findOne(req.user.userId);
      if (!existUser) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ error: 'User not exist' });
      }
      const existCompany = await this.userService.findCompanyByUser(
        req.user.userId,
      );
      const user = {
        email: existUser.email,
        name: existUser.name,
        id: existUser.id,
        existCompany: !!existCompany,
        idCompany: existCompany.id,
      };

      return res.json(user);
    } catch {
      return 'user';
    }
  }
}
