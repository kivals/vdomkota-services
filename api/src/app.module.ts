import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cat/cat.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { envValidatorSchema } from './configs/env-validator.config';
import { PhotoModule } from './modules/photo/photo.module';
import { MigrationModule } from './modules/migration/migration.module';
import { WinstonModule } from './modules/winston/winston.module';
import { getWinstonConfig } from './configs/winston.config';

@Module({
  imports: [
    CatModule,
    ConfigModule.forRoot(envValidatorSchema()),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    PhotoModule,
    MigrationModule,
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getWinstonConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
