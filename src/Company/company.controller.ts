import { Get, Controller } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class GameController {
  constructor(private readonly companyService: CompanyService) {}
  @Get()
  async findAll(): Promise<string> {
    const companys = await this.companyService.findAll();
    console.log(companys);
    return companys;
  }
}
