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

  async generateCatsData(cats: CreateCatDto[]) {
    await this.catModel.deleteMany();
    return this.catModel.insertMany(cats);
  }
}
