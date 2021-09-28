import { Module } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { TypegooseModule } from 'nestjs-typegoose';
import {PhotoModel} from "./photo.model";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: PhotoModel,
        schemaOptions: {
          collection: 'Photo',
        },
      },
    ]),
  ],
  controllers: [PhotoController],
  providers: [PhotoService],
  exports: [TypegooseModule],
})
export class PhotoModule {}
