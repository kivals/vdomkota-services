import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CatModel } from './cat.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(CatModel) private readonly catModel: ModelType<CatModel>,
  ) {}

  async findAll() {
    return this.catModel.find({}).exec();
  }

  async create(dto: CreateCatDto) {
    return this.catModel.create(dto);
  }

  async getCatsWithPhoto() {
    return this.catModel
      .aggregate()
      .sort({ _id: 1 })
      .limit(30)
      .lookup({
        from: 'Photo',
        localField: '_id',
        pipeline: [{ $sample: { size: 1 } }, { $project: { _id: 0, path: 1 } }],
        foreignField: 'catId',
        as: 'photos',
      })
      .project({
        _id: 0,
        name: 1,
        photos: 1,
      });
  }
}
