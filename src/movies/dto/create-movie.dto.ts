import { ApiProperty } from '@nestjs/swagger';
export class CreateMovieDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: false })
  views?: string;

  @ApiProperty({ required: false })
  isPublished?: string;
}
