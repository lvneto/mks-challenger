import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '../database/typeorm.module';
import { movieProviders } from './movies.providers';
import { MoviesService } from './movies.service';

describe('MoviesController', () => {
  let moviesController: MoviesController;
  let moviesService: MoviesService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule],
      controllers: [MoviesController],
      providers: [...movieProviders, MoviesService],
    }).compile();
    moviesService = moduleRef.get<MoviesService>(MoviesService);
    moviesController = moduleRef.get<MoviesController>(MoviesController);
  });

  describe('root', () => {
    it('should a array of movies!"', () => {
      const result: any = [
        {
          id: 'b45a198e-18f8-4a44-9b9d-5bf735dd15f5',
          name: 'Movie 1',
          description: 'Description 1',
          views: 1,
          isPublished: true,
        },
      ];
      jest.spyOn(moviesService, 'findAll').mockImplementation(() => result);
      expect(moviesController.findAll()).toBe(result);
    });
  });
});
