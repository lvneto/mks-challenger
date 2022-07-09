import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @Inject('MOVIES_REPOSITORY')
    private moviesRepository: Repository<Movie>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.moviesRepository.save(createMovieDto);
  }

  findAll(take: number, skip: number) {
    return this.moviesRepository.findAndCount({
      take,
      skip,
    });
  }

  findOne(id: string) {
    return this.moviesRepository.findOne({ where: { id } });
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.moviesRepository.update(id, updateMovieDto);
  }

  remove(id: string) {
    return this.moviesRepository.delete(id);
  }
}
