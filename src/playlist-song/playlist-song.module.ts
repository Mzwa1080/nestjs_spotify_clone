import { Module } from '@nestjs/common';
import { PlaylistSongService } from './playlist-song.service';
import { PlaylistSongController } from './playlist-song.controller';
import { PlaylistSongEntity } from './entities/playlist-song.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([PlaylistSongEntity])],
  controllers: [PlaylistSongController],
  providers: [PlaylistSongService],
  exports : [PlaylistSongService]
})
export class PlaylistSongModule {}
