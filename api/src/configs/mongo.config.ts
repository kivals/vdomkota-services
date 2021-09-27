import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose/dist/typegoose-options.interface';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoDbUrl(configService),
    ...getMongoOptions,
  };
};

const getMongoOptions = () => ({
  useNewUrlParser: true, // парсер URL для правильного парсинга строки подключения
  useCreateIndex: true, // создание индексов
  useUnifiedTopology: true, // единая топология
});

const getMongoDbUrl = (configService: ConfigService): string =>
  'mongodb://' +
  configService.get('MONGODB_HOST') +
  ':' +
  configService.get('MONGODB_PORT') +
  '/' +
  configService.get('MONGODB_DATABASE');
