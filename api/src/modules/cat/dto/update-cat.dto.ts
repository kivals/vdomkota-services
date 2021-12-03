import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCatDto {
  @IsString()
  name: string;

  @IsNumber({}, { message: 'Возраст должен быть числом' })
  age: number;

  @IsString()
  info: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CatCharacteristicDto)
  characteristics: CatCharacteristicDto[];
}

class CatCharacteristicDto {
  @IsString()
  name: string;

  @IsString()
  value: string;
}
