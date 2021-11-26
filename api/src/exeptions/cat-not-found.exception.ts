import { HttpException, HttpStatus } from '@nestjs/common';
//TODO посмотреть эталонные ответы сервера при ошибках и возможно потребуется сделать кастомный EXCEPTION FILTER
export default class CatNotFoundException extends HttpException {
  constructor(alias: string) {
    super(`Кот с alias ${alias} не найден`, HttpStatus.NOT_FOUND);
  }
}
