import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from 'src/database/typeorm.module';
import { movieProviders } from './movies.providers';

@Module({
  imports: [TypeOrmModule],
  controllers: [MoviesController],
  providers: [...movieProviders, MoviesService],
})
export class MoviesModule {}
