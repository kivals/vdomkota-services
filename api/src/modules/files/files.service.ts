import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import * as sharp from 'sharp';

@Injectable()
export class FilesService {
  async saveFiles(files: Express.Multer.File[], folderName: string) {
    const uploadFolder = this.buildUploadPath(folderName.toLowerCase());
    console.log(uploadFolder);
    // Создаем папку, если нет
    await ensureDir(uploadFolder);
    const res: any[] = [];
    for (const file of files) {
      console.log(file);
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      res.push({
        url: `${folderName}/${file.originalname}`,
      });
    }

    return res;
  }

  /**
   * Собрать полный адрес папки
   * @param folder наименование папки
   */
  buildUploadPath(folder: string) {
    return `${path}/uploads/cats/${folder}`;
  }

  /**
   * Конвертировать в формат WebP
   * @param file буфер файла
   */
  convertToWebP(file: Buffer) {
    return sharp(file).webp().toBuffer();
  }
}
