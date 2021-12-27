import { Body, Controller, HttpCode, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { MFile } from './mfile.class';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('files'))
  async uploadFile(@Body('alias') alias: string, @UploadedFile() file: Express.Multer.File) {
    // Подготовить путь для папки назначения файла
    const path = this.filesService.buildUploadPath(alias.toLowerCase());

    // Валидация файла от клиента
    this.filesService.validateFile(path, file);

    // Конвертировать в необходимые форматы (jpg и webp)
    const files: MFile[] = await this.filesService.prepareFilesBeforeSaving(file);

    // Сохранение файлов
    return this.filesService.saveFiles(files, path);
  }
}
