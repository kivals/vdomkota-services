import { Body, Controller, HttpCode, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
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
    const filesToSave: MFile[] = [];
    if (file.mimetype.includes('image')) {
      const webpBuffer: Buffer = await this.filesService.convertToWebP(file.buffer);
      const jpgBuffer: Buffer = await this.filesService.convertToJPG(webpBuffer);
      filesToSave.push({
        originalname: `${file.originalname.split('.')[0]}.jpg`,
        buffer: jpgBuffer,
      });
      filesToSave.push({
        originalname: `${file.originalname.split('.')[0]}.webp`,
        buffer: webpBuffer,
      });
    }
    return this.filesService.saveFiles(filesToSave, alias);
  }
}
