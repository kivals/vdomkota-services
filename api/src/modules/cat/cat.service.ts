import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CatModel } from './cat.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateCatDto } from './dto/create-cat.dto';
import { WINSTON_MODULE_PROVIDER } from '../winston/winston.constants';
import { Logger } from 'winston';
import { BaseCatResponse, CatByAliasResponse } from './types/cat-base-response.type';
import { UpdateCatDto } from './dto/update-cat.dto';
import CatNotFoundException from '../../exeptions/cat-not-found.exception';

import mongoose from 'mongoose';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(CatModel) private readonly catModel: ModelType<CatModel>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  //TODO выпилить если не используется
  async findAll() {
    this.logger.info('Get all cats');
    return this.catModel.find({}).exec();
  }

  async create(dto: CreateCatDto) {
    this.logger.info(`Create cat: ${dto.alias}`);
    return this.catModel.create(dto);
  }

  /**
   * Вернуть данные по котам, без загрузки ВСЕХ фото и характеристик котов.
   * Загружаем только ГЛАВНОЕ фото
   */
  async getBaseCatsInfo(): Promise<BaseCatResponse> {
    this.logger.info('Get short cat info');
    return this.catModel
      .aggregate()
      .sort({ order: 1 })
      .limit(30)
      .lookup({
        from: 'Photo',
        localField: '_id',
        pipeline: [{ $match: { isMain: true } }, { $project: { _id: 0, path: 1 } }],
        foreignField: 'catId',
        as: 'photos',
      })
      .project({
        _id: 0,
        name: 1,
        alias: 1,
        sex: 1,
        isKitten: 1,
        photos: 1,
      });
  }

  async getCatByAlias(alias: string): Promise<CatByAliasResponse[]> {
    this.logger.info(`Get cat by alias: ${alias}`);
    const foundedCat = await this.catModel
      .aggregate()
      .match({ alias })
      .limit(1)
      .lookup({
        from: 'Photo',
        localField: '_id',
        pipeline: [{ $limit: 20 }, { $project: { _id: 0, path: 1, isMain: 1 } }],
        foreignField: 'catId',
        as: 'photos',
      })
      .project({
        _id: 0,
        name: 1,
        age: 1,
        info: 1,
        characteristics: 1,
        photos: 1,
      });
    console.log(foundedCat);
    if (foundedCat.length) {
      return foundedCat;
    }
    throw new CatNotFoundException(alias);
  }

  async updateCat(alias: string, dto: UpdateCatDto): Promise<CatModel> {
    const updatedCat: CatModel = await this.catModel
      .findOneAndUpdate({ alias }, dto, { new: true, projection: { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 } })
      .exec();
    if (updatedCat) {
      return updatedCat;
    }
    throw new CatNotFoundException(alias);
  }

  async deleteCat(alias: string) {
    const cat = await this.catModel.findOne({ alias });
    if (!cat) {
      throw new CatNotFoundException(alias);
    }
    //1. Удаляем данные

    //2. Удаляем связанные фотки
  }
}
