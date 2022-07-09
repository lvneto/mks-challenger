import { ApiProperty } from '@nestjs/swagger';
export class CreateMovieDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: false })
  views?: string;
}
