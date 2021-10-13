import {
  Get,
  Controller,
  Param,
  Post,
  Body,
  Res,
  HttpStatus,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { Company } from 'src/database/Entities/Company';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @Get()
  async findAll(): Promise<Array<Company>> {
    const companys = await this.companyService.findAll();
    return companys;
  }
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const existCompany = await this.companyService.findOne(id);
    if (!existCompany) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ error: 'company not exist' });
    }

    return res.status(HttpStatus.OK).json(existCompany);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() data: Company,
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    console.log(file.path);
    try {
      const values = { ...data, file_url: file.path.toString() };
      await this.companyService.create(values);

      return res.status(HttpStatus.CREATED).json();
    } catch {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // async upload(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  // }
}
