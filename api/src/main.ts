import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //TODO Прописать порт через переменную
  await app.listen(3000);
}
bootstrap();
