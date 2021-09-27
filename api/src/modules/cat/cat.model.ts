import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

class CatCharacteristic {
  @prop()
  alias: string;

  @prop()
  name: string;

  @prop()
  value: string;
}

export class CatModel extends TimeStamps {
  @prop()
  name: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  age: number;

  @prop()
  info: string;

  @prop()
  hasHome: boolean;

  @prop({ type: () => Date })
  shelterPutDate: Date;

  @prop({ type: () => [CatCharacteristic], _id: false })
  characteristics: CatCharacteristic[];
}
