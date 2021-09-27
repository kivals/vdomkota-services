import { Controller, Get } from '@nestjs/common';
import { MigrationService } from './migration.service';
import { CreateCatDto } from '../cat/dto/create-cat.dto';
import { generateCats } from './data/cat.data';

@Controller('migration')
export class MigrationController {
  constructor(private readonly migrationService: MigrationService) {}

  @Get('start')
  async generateTestCatsData() {
    const cats: CreateCatDto[] = generateCats();
    return this.migrationService.generateCatsData(cats);
  }
}
