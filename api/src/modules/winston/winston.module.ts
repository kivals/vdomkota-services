import { DynamicModule, Global, Module } from '@nestjs/common';
import { WinstonModuleOptions } from './winston.interfaces';
import { createWinstonAsyncProviders } from './winston.providers';

@Global()
@Module({})
export class WinstonModule {
  public static forRootAsync(options: WinstonModuleOptions): DynamicModule {
    const providers = createWinstonAsyncProviders(options);

    return {
      module: WinstonModule,
      providers,
      imports: options.imports,
      exports: providers,
    };
  }
}
