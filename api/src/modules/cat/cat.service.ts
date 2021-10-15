import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CatModel } from './cat.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateCatDto } from './dto/create-cat.dto';
import { WINSTON_MODULE_PROVIDER } from '../winston/winston.constants';
import { Logger } from 'winston';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(CatModel) private readonly catModel: ModelType<CatModel>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async findAll() {
    this.logger.info('Get all cats');
    return this.catModel.find({}).exec();
  }

  async create(dto: CreateCatDto) {
    this.logger.info(`Create cat: ${dto.alias}`);
    return this.catModel.create(dto);
  }

  async getShortCatsInfo() {
    this.logger.info('Get short cat info');
    return this.catModel
      .aggregate()
      .sort({ order: 1 })
      .limit(30)
      .lookup({
        from: 'Photo',
        localField: '_id',
        pipeline: [
          { $match: { isMain: true } },
          { $project: { _id: 0, path: 1 } },
        ],
        foreignField: 'catId',
        as: 'photos',
      })
      .project({
        _id: 0,
        name: 1,
        alias: 1,
        photos: 1,
      });
  }

  async getCatByAlias(alias: string) {
    this.logger.info(`Get cat by alias: ${alias}`);
    return this.catModel
      .aggregate()
      .match({ alias })
      .limit(1)
      .lookup({
        from: 'Photo',
        localField: '_id',
        pipeline: [{ $limit: 20 }, { $project: { _id: 0, path: 1 } }],
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
  }
}
