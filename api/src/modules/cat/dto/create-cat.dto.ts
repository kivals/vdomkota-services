import { Sex } from '../cat.model';

export class CreateCatDto {
  name: string;

  alias: string;

  age?: number;

  sex: Sex;

  order: number;

  info: string;

  hasHome?: boolean;

  photoLimit?: number;

  isKitten?: boolean;

  shelterPutDate: Date;

  characteristics?: CatCharacteristic[];
}

class CatCharacteristic {
  name: string;

  value: string;
}
