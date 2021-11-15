import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
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
    console.log(game);
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
    @Req() req,
  ) {
    try {
      console.log(data);
      console.log(file);
      const existCompany = await this.gameService.findCompanyByUserId(
        req.user.userId,
      );
      if (!existCompany) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ error: 'Company not exist' });
      }
      const values = {
        ...data,
        file_url: file.path,
        company: existCompany.id,
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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeGame(@Param('id') id, @Req() req, @Res() res: Response) {
    try {
      const existGame = await this.gameService.findOne(id);

      if (!existGame) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ error: 'Game not exist' });
      }

      const existCompany = await this.gameService.findCompanyByUserId(
        req.user.userId,
      );

      if (!existCompany) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ error: 'Company not exist' });
      }

      if (existGame.company.id !== existCompany.id) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ error: 'Game not exist in company' });
      }
      await this.gameService.removeFile(id);

      return res.status(HttpStatus.OK).json({});
    } catch (e) {
      console.log(e);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
  }
}
