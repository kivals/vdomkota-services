import { Types } from 'mongoose';
import { prop } from '@typegoose/typegoose';

export class PhotoModel {
  @prop({ unique: true })
  path: string;

  @prop({ default: false })
  isDeleted: boolean;

  @prop()
  catId: Types.ObjectId;

  @prop()
  order: number;

  @prop()
  isMain: boolean;
}
