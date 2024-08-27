import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongEntity } from 'src/song/entities/song.entity';

@Module({
  imports : [TypeOrmModule.forFeature([SongEntity])],
  providers: [SeedService],
})
export class SeedModule {}
