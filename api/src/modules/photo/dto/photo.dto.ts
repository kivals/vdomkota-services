import { Types } from 'mongoose';

export class PhotoDto {
  catId: Types.ObjectId;

  path: string;

  isDeleted: boolean;

  order: number;

  isMain: boolean;
}
