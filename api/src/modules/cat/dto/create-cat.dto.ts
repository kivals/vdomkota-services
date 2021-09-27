export class CreateCatDto {
  name: string;

  alias: string;

  age?: number;

  info: string;

  hasHome?: boolean;

  shelterPutDate: Date;

  characteristics?: CatCharacteristic[];
}

class CatCharacteristic {
  alias: string;

  name: string;

  value: string;
}
