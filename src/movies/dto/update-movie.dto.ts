import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: false })
  views?: string;
}
