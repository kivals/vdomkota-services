import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum Sex {
  male = 'male',
  female = 'female',
}

class CatCharacteristic {
  @prop()
  name: string;

  @prop()
  value: string;
}

export class CatModel extends TimeStamps {
  @prop()
  name: string;

  // Должно быть с маленькой буквы
  @prop({ unique: true })
  alias: string;

  @prop()
  age: number;

  @prop({ default: false })
  isKitten: boolean;

  @prop()
  info: string;

  @prop({ default: false })
  hasHome?: boolean;

  @prop()
  order: number;

  @prop({ enum: Sex })
  sex: Sex;

  @prop({ type: () => Date })
  shelterPutDate: Date;

  @prop({ type: () => [CatCharacteristic], _id: false })
  characteristics: CatCharacteristic[];
}
