import { Body, Controller, Delete, Get, Param, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatService } from './cat.service';
import { BaseCatResponse, CatByAliasResponse } from './types/cat-base-response.type';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatModel } from './cat.model';

//TODO сделать отдельный модуль СТРАНИЦА - который будет отдавать данные по конкретной странице
@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async find() {
    return this.catService.findAll();
  }

  /**
   * Отправить БАЗОВУЮ информацию по всем котам
   * В ответ не попадет: ВСЕ фото и характеристики котов
   */
  @Get('/base')
  async getBaseCatsInfo(): Promise<BaseCatResponse> {
    return this.catService.getBaseCatsInfo();
  }

  @Get(':alias')
  async getCatByAlias(@Param('alias') alias: string): Promise<CatByAliasResponse> {
    return this.catService.getCatByAlias(alias).then((cat) => cat[0]);
  }

  @UsePipes(new ValidationPipe())
  @Put(':alias')
  async updateCat(@Param('alias') alias: string, @Body() dto: UpdateCatDto): Promise<CatModel> {
    return this.catService.updateCat(alias, dto);
  }

  @Delete(':alias')
  async deleteCat(@Param('alias') alias: string) {
    return this.catService.deleteCat(alias);
  }
}
