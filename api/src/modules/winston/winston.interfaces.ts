import { ModuleMetadata } from '@nestjs/common';
import { LoggerOptions } from 'winston';

export interface WinstonModuleOptions extends ModuleMetadata {
  useFactory: (...args: any[]) => LoggerOptions;
  inject?: any[];
}
