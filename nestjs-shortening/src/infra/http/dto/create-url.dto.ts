import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUrlDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsUrl({ allow_fragments: true }, { message: 'Invalid URL format' })
  originalUrl: string;
}
