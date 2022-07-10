import { Test, TestingModule } from '@nestjs/testing';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

describe('Movies Controller unit terst', () => {
  let movieController: MoviesController;
  let spyService: MoviesService;
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: MoviesService,
      useFactory: () => ({
        create: jest.fn(() => []),
        findAll: jest.fn(() => []),
      }),
    };
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService, ApiServiceProvider],
    }).compile();

    movieController = app.get<MoviesController>(MoviesController);
    spyService = app.get<MoviesService>(MoviesService);
  });

  it('calling Create method not null', () => {
    const dto = new CreateMovieDto();
    expect(movieController.create(dto)).not.toEqual(null);
  });

  it('calling Create method with payloadDTO', () => {
    const dto = new CreateMovieDto();
    movieController.create(dto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(dto);
  });

  it('calling findAll method with parameters', () => {
    movieController.findAll('10', '0');
    expect(spyService.findAll).toHaveBeenCalled();
  });

  it('calling findAll method without parameters', () => {
    movieController.findAll(undefined, undefined);
    expect(spyService.findAll).toHaveBeenCalled();
  });
});
