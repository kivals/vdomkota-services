import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  find() {
    return {
      cat: 'cat',
    };
  }
}
