import { Test, TestingModule } from '@nestjs/testing';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

class ApiServiceMock {
  create(dto: CreateMovieDto) {
    return [];
  }
  findOne() {
    return [];
  }
  update(id: string, dto: UpdateMovieDto) {
    return [];
  }
  remove(id: string) {
    return null;
  }
}
describe.only('MoviesService', () => {
  let moviesService: MoviesService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: MoviesService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService, ApiServiceProvider],
    }).compile();
    moviesService = module.get<MoviesService>(MoviesService);
  });

  it('should call create method with expected params', async () => {
    const createNoteSpy = jest.spyOn(moviesService, 'create');
    const dto = new CreateMovieDto();
    moviesService.create(dto);
    expect(createNoteSpy).toHaveBeenCalledWith(dto);
  });

  it('should call findOne method with expected param', async () => {
    const findOneNoteSpy = jest.spyOn(moviesService, 'findOne');
    moviesService.findOne('1');
    expect(findOneNoteSpy).toHaveBeenCalledWith('1');
  });

  it('should call update method with expected params', async () => {
    const updateNoteSpy = jest.spyOn(moviesService, 'update');
    const movieId = '1';
    const dto = new UpdateMovieDto();
    moviesService.update(movieId, dto);
    expect(updateNoteSpy).toHaveBeenCalledWith(movieId, dto);
  });

  it('should call remove method with expected param', async () => {
    const deleteNoteSpy = jest.spyOn(moviesService, 'remove');
    const movieId = '1';
    moviesService.remove(movieId);
    expect(deleteNoteSpy).toHaveBeenCalledWith(movieId);
  });
});
