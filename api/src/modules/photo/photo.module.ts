import { Module } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: PhotoController,
        schemaOptions: {
          collection: 'Photo',
        },
      },
    ]),
  ],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
