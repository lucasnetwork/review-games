import { Get, Controller, StreamableFile, Res, Param } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('uploads/:file')
  root(@Res() res, @Param('file') file) {
    res.sendFile(join(__dirname, '..', 'uploads', file));
  }
}
