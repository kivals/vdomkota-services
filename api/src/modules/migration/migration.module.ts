import { Module } from '@nestjs/common';
import { MigrationService } from './migration.service';
import { MigrationController } from './migration.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { CatModel } from '../cat/cat.model';
import { CatModule } from '../cat/cat.module';

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
    CatModule,
  ],
  providers: [MigrationService],
  controllers: [MigrationController],
})
export class MigrationModule {}
