import { ApiProperty } from '@nestjs/swagger';
export class CreateMovieDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: true, default: true })
  name: string;

  @ApiProperty({ required: true, default: true })
  description: string;

  @ApiProperty({ required: false, default: true })
  views?: string;

  @ApiProperty({ required: false, default: true })
  isPublished?: boolean = true;
}
