import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';
import * as rotateFile from 'winston-daily-rotate-file';
import { LoggerOptions } from 'winston';

export const getWinstonConfig = (
  configService: ConfigService,
): LoggerOptions => {
  return configService.get('APP_ENV') === 'dev'
    ? {
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'DEVELOPMENT. Vdomkota API service' },
        transports: [
          new winston.transports.Console({
            format: winston.format.simple(),
          }),
        ],
      }
    : {
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'PRODUCTION. Vdomkota API service' },
        transports: [
          new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
          }),
          new winston.transports.Console({
            format: winston.format.simple(),
          }),
          new rotateFile({
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
          }),
        ],
      };
};
