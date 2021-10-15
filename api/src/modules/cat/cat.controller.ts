import { Controller, Get, Param } from '@nestjs/common';
import { CatService } from './cat.service';

//TODO сдулать отдельный модуль СТРАНИЦА - который будет отдавать данные по конкретной странице
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async find() {
    return this.catService.findAll();
  }

  @Get('short-cat-info')
  async getShortCatsInfo() {
    return this.catService.getShortCatsInfo();
  }

  @Get(':alias')
  async getCatByAlias(@Param('alias') alias: string) {
    return this.catService.getCatByAlias(alias);
  }
}
