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
  Req,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() data: Company,
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
    @Req() req,
  ) {
    try {
      const existCompany = await this.companyService.findOneByUser(
        req.user.userId,
      );
      if (existCompany) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: 'Company already exist' });
      }
      const values = {
        ...data,
        file_url: file.path.toString(),
        user: req.user.userId,
      };
      await this.companyService.create(values);

      return res.status(HttpStatus.CREATED).json();
    } catch (e) {
      console.log(e);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'server error' });
    }
  }
}
