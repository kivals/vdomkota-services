import { BadRequestException, Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, writeFile, readdirSync } from 'fs-extra';
import * as sharp from 'sharp';
import { MFile } from './mfile.class';
import { IFileElementResponse } from './dto/file-element.response';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FilesService {
  constructor(private readonly configService: ConfigService) {}
  /**
   * Сохранить файлы на устройстве
   * @param files список объектов файлов
   * @param path конечная директория для сохранения
   */
  async saveFiles(files: MFile[], path: string) {
    // Создаем папку, если нет
    await ensureDir(path);

    const res: IFileElementResponse[] = [];
    for (const file of files) {
      const fileName = `${Date.now()}--${file.originalname}`;
      await writeFile(`${path}/${fileName}`, file.buffer);
      res.push({
        url: `${path}/${fileName}`,
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

  /**
   * Валидация перед сохранением файла
   * Проверки:
   *  - тип файла должен быть картинка
   *  - размер файла не больше чем в указано конфигурации
   *  - лимит картинок не больше чем в указано в конфигурации
   * @param path полный путь
   * @param file объект файла картинки
   * @throws BadRequestException
   */
  validateFile(path: string, file: Express.Multer.File) {
    if (!file.mimetype.includes('image')) {
      throw new BadRequestException(`Файл ${file.originalname} не может быть загружен, так как не является картинкой`);
    }
    if (file.size > this.configService.get('MAX_FILE_SIZE')) {
      throw new BadRequestException(
        `Файл ${file.originalname} не может быть загружен, так как размер файла ${
          file.originalname
        } не должен превышать ${this.configService.get('MAX_FILE_SIZE')}кб`,
      );
    }
    if (readdirSync(path).length >= this.configService.get('LIMIT_FILES_FOLDER') * 2) {
      throw new BadRequestException(
        `Файл ${
          file.originalname
        } не может быть загружен, так как лимит изображений для кота = ${this.configService.get('LIMIT_FILES_FOLDER')}`,
      );
    }
  }
}
