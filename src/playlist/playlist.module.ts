import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistEntity } from './entities/playlist.entity';
import { SongEntity } from 'src/song/entities/song.entity';
import { UserEntity } from 'src/user/user.entity';
import { PlaylistSongEntity } from './entities/playlist-song.entity';

@Module({
  imports :[TypeOrmModule.forFeature([PlaylistEntity, PlaylistSongEntity])] ,
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
