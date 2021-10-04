import {Inject, Injectable} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CatModel } from '../cat/cat.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateCatDto } from '../cat/dto/create-cat.dto';
import { generatePhotos } from './data/cat.data';
import { PhotoModel } from '../photo/photo.model';
import {WINSTON_MODULE_PROVIDER} from "../winston/winston.constants";
import {Logger} from "winston";

@Injectable()
export class MigrationService {
  constructor(
    @InjectModel(CatModel) private readonly catModel: ModelType<CatModel>,
    @InjectModel(PhotoModel) private readonly photoModel: ModelType<PhotoModel>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async generateCatsData(cats: CreateCatDto[]) {
    this.logger.info('Generate cats. Begin');
    await this.catModel.deleteMany();
    this.logger.info('Deleted all cats');
    await this.photoModel.deleteMany();
    this.logger.info('Deleted all photos');
    for (const cat of cats) {
      const { id, alias } = await this.catModel.create(cat);
      this.logger.info(`Created new cat: ${alias}`);
      const photos = generatePhotos(id, alias);
      await this.photoModel.insertMany(photos);
      this.logger.info(`Created new photos for cat: ${alias}`);
    }
    this.logger.info('Generate cats. End');
  }
}
