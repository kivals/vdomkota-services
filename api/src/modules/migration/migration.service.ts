import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CatModel } from '../cat/cat.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateCatDto } from '../cat/dto/create-cat.dto';
import { generatePhotos } from './data/cat.data';
import { PhotoModel } from '../photo/photo.model';

@Injectable()
export class MigrationService {
  constructor(
    @InjectModel(CatModel) private readonly catModel: ModelType<CatModel>,
    @InjectModel(PhotoModel) private readonly photoModel: ModelType<PhotoModel>,
  ) {}

  async generateCatsData(cats: CreateCatDto[]) {
    await this.catModel.deleteMany();
    for (const cat of cats) {
      const { id, alias } = await this.catModel.create(cat);
      const photos = generatePhotos(id, alias);
      await this.photoModel.insertMany(photos);
      console.log(photos);
      console.log(
        '-----------------------------------------------------------------------------------------',
      );
    }
    // const insertedCats = await this.catModel
    // const ids = insertedCats.map((cat) => cat.id);
    // return ids;
  }
}
