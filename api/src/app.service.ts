import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from './modules/winston/winston.constants';

@Injectable()
export class AppService {
  constructor(
    private config: ConfigService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  getHello() {
    const appENV = this.config.get('APP_ENV');
    this.logger.info('Logging the appENV -> ' + appENV);
    return {
      message: 'Hello',
    };
  }
}
