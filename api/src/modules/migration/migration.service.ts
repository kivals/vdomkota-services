import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CatModel } from '../cat/cat.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateCatDto } from '../cat/dto/create-cat.dto';

@Injectable()
export class MigrationService {
  constructor(
    @InjectModel(CatModel) private readonly catModel: ModelType<CatModel>,
  ) {}

  async generateCatsData(cats: CreateCatDto[]) {
    await this.catModel.deleteMany();
    return this.catModel.insertMany(cats);
  }
}
