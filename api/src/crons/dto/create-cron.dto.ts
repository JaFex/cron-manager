import { Transform } from 'class-transformer';
import { IsIn, IsObject, IsString, IsTimeZone, IsUrl } from 'class-validator';

export class CreateCronDto {

  @IsUrl({ require_tld: false })
  uri: string;

  @Transform((param) => param.value.toUpperCase())
  @IsIn(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
  httpMethod: string;

  @IsString()
  body: string;

  @IsString()
  schedule: string;

  @IsTimeZone()
  timeZone: string;
}
