import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatModel } from './cat.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CatModel,
        schemaOptions: {
          collection: 'Cat',
        },
      },
    ]),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
