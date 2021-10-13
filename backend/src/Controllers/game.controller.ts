import { Get, Controller } from '@nestjs/common';

@Controller('games')
export class GameController {
  @Get()
  findAll(): string {
    return 'gamesGet';
  }
}
