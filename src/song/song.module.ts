import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongEntity } from './entities/song.entity';

@Module({
  imports : [TypeOrmModule.forFeature([SongEntity])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
