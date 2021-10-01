import { Module } from '@nestjs/common';
import { createLogger, format, LoggerOptions, transports } from 'winston';

@Module({
  providers: [
    {
      provide: 'winston-options',
      //TODO вынести в конфиг
      useFactory: (): LoggerOptions => {
        return {
          level: 'info',
          format: format.json(),
          transports: [
            new transports.Console({
              format: format.simple(),
            }),
          ],
        };
      },
    },
    {
      provide: 'winston',
      useFactory: (loggerOpts: LoggerOptions) => createLogger(loggerOpts),
      inject: ['winston-options'],
    },
  ],
  exports: ['winston-options', 'winston'],
})
export class WinstonModule {}
