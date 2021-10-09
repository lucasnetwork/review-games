import {
  Get,
  Controller,
  Param,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
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
  async create(@Body() data: Company): Promise<Company> {
    try {
      const response = await this.companyService.create(data);

      return response;
    } catch {}
  }
}
