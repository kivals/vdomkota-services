import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import * as sharp from 'sharp';
import { MFile } from './mfile.class';
import { IFileElementResponse } from './dto/file-element.response';

@Injectable()
export class FilesService {
  /**
   * Сохранить файлы на устройстве
   * @param files список объектов файлов
   * @param folderName конечная директория для сохранения
   */
  async saveFiles(files: MFile[], folderName: string) {
    const uploadFolder = this.buildUploadPath(folderName.toLowerCase());
    // Создаем папку, если нет
    await ensureDir(uploadFolder);

    const res: IFileElementResponse[] = [];
    for (const file of files) {
      const fileName = `${Date.now()}--${file.originalname}`;
      await writeFile(`${uploadFolder}/${fileName}`, file.buffer);
      res.push({
        url: `${folderName}/${fileName}`,
        name: fileName,
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

  /**
   * Конвертировать в формат JPG
   * @param file буфер файла
   */
  convertToJPG(file: Buffer) {
    return sharp(file).toFormat('jpeg', { mozjpeg: true }).toBuffer();
  }
}
