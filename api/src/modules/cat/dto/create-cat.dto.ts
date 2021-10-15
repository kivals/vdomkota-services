export class CreateCatDto {
  name: string;

  alias: string;

  age?: number;

  order: number;

  info: string;

  hasHome?: boolean;

  photoLimit?: number;

  shelterPutDate: Date;

  characteristics?: CatCharacteristic[];
}

class CatCharacteristic {
  alias: string;

  name: string;

  value: string;
}
