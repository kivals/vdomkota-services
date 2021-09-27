import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { generateCats } from './data/cat.data';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async find() {
    return this.catService.findAll();
  }

  @Get('generate-test-data')
  async generateTestCatsData() {
    const cats: CreateCatDto[] = generateCats();
    return this.catService.generateCatsData(cats);
  }
}
