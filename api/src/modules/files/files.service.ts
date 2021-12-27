import { BadRequestException, Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, writeFile, readdirSync } from 'fs-extra';
import * as sharp from 'sharp';
import { MFile } from './mfile.class';
import { IFileElementResponse } from './dto/file-element.response';
import { ConfigService } from '@nestjs/config';

// Максимальная длина файла
const MAX_FILE_NAME_LENGTH = 50;

@Injectable()
export class FilesService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Сохранить файлы на устройстве
   * @param files список объектов файлов
   * @param path конечная директория для сохранения
   */
  public async saveFiles(files: MFile[], path: string) {
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
   * Подготовить необходимые форматы
   * @param file исходный файл
   * @return MFile[] списков конвертированных файлов
   */
  public async prepareFilesBeforeSaving(file: Express.Multer.File): Promise<MFile[]> {
    // Конвертируем файл в нужных разрешениях
    const webpBuffer: Buffer = await this.convertToWebP(file.buffer);
    const jpgBuffer: Buffer = await this.convertToJPG(webpBuffer);

    const filesToSave: MFile[] = [];
    filesToSave.push({
      originalname: `${file.originalname.split('.')[0]}.jpg`,
      buffer: jpgBuffer,
    });
    filesToSave.push({
      originalname: `${file.originalname.split('.')[0]}.webp`,
      buffer: webpBuffer,
    });

    return filesToSave;
  }

  /**
   * Собрать полный адрес папки хранилища фоток котов
   * @param folder наименование папки
   */
  public buildUploadPath(folder: string) {
    return `${path}/uploads/cats/${folder}`;
  }

  /**
   * Валидация перед сохранением файла
   * Проверки:
   *  - тип файла должен быть картинка
   *  - размер файла не больше чем в указано конфигурации
   *  - лимит картинок в папке не больше чем в указано в конфигурации
   * @param path полный путь
   * @param file объект файла картинки
   * @throws BadRequestException
   */
  public validateFile(path: string, file: Express.Multer.File) {
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
    // Обрезаем наименование, чтобы избежать длинных имен
    file.originalname = file.originalname.substring(0, MAX_FILE_NAME_LENGTH);
  }

  /**
   * Конвертировать в формат WebP
   * @param file буфер файла
   */
  private async convertToWebP(file: Buffer) {
    return sharp(file).webp().toBuffer();
  }

  /**
   * Конвертировать в формат JPG
   * @param file буфер файла
   */
  private async convertToJPG(file: Buffer) {
    return sharp(file).toFormat('jpeg', { mozjpeg: true }).toBuffer();
  }
}
