import { Module } from '@nestjs/common';
import { MigrationService } from './migration.service';
import { MigrationController } from './migration.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatModel } from '../cat/cat.model';
import { CatModule } from '../cat/cat.module';
import { PhotoModel } from '../photo/photo.model';
//TODO !!!ВАЖНО модуль должен быть доступен только для DEV-режима
@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CatModel,
        schemaOptions: {
          collection: 'Cat',
        },
      },
      {
        typegooseClass: PhotoModel,
        schemaOptions: {
          collection: 'Photo',
        },
      },
    ]),
    CatModule,
  ],
  providers: [MigrationService],
  controllers: [MigrationController],
})
export class MigrationModule {}
