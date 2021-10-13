import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Request,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Game } from 'src/database/Entities/Game';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async findAll(): Promise<Game[]> {
    const games = await this.gameService.findAll();
    return games;
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Game> {
    const game = await this.gameService.findOne(id);
    return game;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() data: Game,
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      const values = {
        ...data,
        file_url: file.path,
      };
      const response = await this.gameService.create(values);

      return res.status(HttpStatus.CREATED).json(response);
    } catch (e) {
      console.log(e);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
  }
}
