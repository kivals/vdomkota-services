import { CatModel } from '../cat.model';
import { PhotoModel } from '../../photo/photo.model';

export type BaseCatResponse = (Pick<CatModel, 'name' | 'alias' | 'isKitten' | 'sex'> & {
  photos: Pick<PhotoModel, 'path'>[];
})[];

export type CatByAliasResponse = Pick<CatModel, 'name' | 'age' | 'info' | 'characteristics'> & {
  photos: Pick<PhotoModel, 'path' | 'isMain'>[];
};
