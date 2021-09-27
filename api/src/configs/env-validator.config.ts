import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import * as Joi from 'joi';

export const envValidatorSchema = (): ConfigModuleOptions => {
  return {
    validationSchema: Joi.object({
      MONGODB_HOST: Joi.string().required().default('api-db'),
      MONGODB_PORT: Joi.number().positive().default(27017),
      MONGODB_DATABASE: Joi.string().required().default('vdomkota'),
    }),
    isGlobal: true,
  };
};
