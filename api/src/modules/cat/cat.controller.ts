import { Body, Controller, Get, NotFoundException, Param, Patch } from '@nestjs/common';
import { CatService } from './cat.service';
import { BaseCatResponse, CatByAliasResponse } from './types/cat-base-response.type';
import { UpdateCatDto } from './dto/update-cat.dto';

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
    const cat = await this.catService.getCatByAlias(alias);
    //Делаем нормализацию
    if (cat.length) {
      return cat[0];
    } else {
      //TODO
      throw new NotFoundException('Кот не найден');
    }
  }

  @Patch(':alias')
  async updateCat(@Param('alias') alias: string, @Body() dto: UpdateCatDto) {
    return this.catService.updateCat(alias, dto);
  }
}
