import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async find() {
    return this.catService.findAll();
  }

  @Get('slider-cats')
  async getSliderCats() {
    return this.catService.getCatsWithPhoto();
  }
}
