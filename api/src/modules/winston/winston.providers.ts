import { WinstonModuleOptions } from './winston.interfaces';
import {
  WINSTON_MODULE_OPTIONS,
  WINSTON_MODULE_PROVIDER,
} from './winston.constants';
import { createLogger, LoggerOptions } from 'winston';
import { Provider } from '@nestjs/common';

export const createWinstonAsyncProviders = (
  options: WinstonModuleOptions,
): Provider[] => {
  return [
    {
      provide: WINSTON_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    },
    {
      provide: WINSTON_MODULE_PROVIDER,
      useFactory: (loggerOpts: LoggerOptions) => createLogger(loggerOpts),
      inject: [WINSTON_MODULE_OPTIONS],
    },
  ];
};
