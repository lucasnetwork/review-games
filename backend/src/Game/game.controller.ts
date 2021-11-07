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
  async findOne(@Param('id') id, @Res() res: Response) {
    const game = await this.gameService.findOne(id);
    const reviewsReducer = game.reviews.reduce(
      (current, review) => review.review + current,
      0,
    );
    const { reviews, ...gameResponse } = game;
    return res.status(HttpStatus.CREATED).json({
      ...gameResponse,
      reviewMed: reviewsReducer / game.reviews.length,
    });
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
      console.log(values);
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
