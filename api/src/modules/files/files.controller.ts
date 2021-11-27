import { Body, Controller, HttpCode, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesServes: FilesService) {}

  @Post('upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('files'))
  async uploadFile(@Body('alias') alias: string, @UploadedFile() file: Express.Multer.File) {
    console.log(alias);
    //await this.filesServes.convertToWebP(file.buffer);
    return this.filesServes.saveFiles([file], alias);
  }
}
