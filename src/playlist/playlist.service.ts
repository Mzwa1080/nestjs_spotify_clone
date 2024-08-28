import { Inject, Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaylistEntity } from './entities/playlist.entity';
import { Repository } from 'typeorm';
import { PlaylistSongEntity } from './entities/playlist-song.entity';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class PlaylistService {
  constructor(@InjectRepository(PlaylistEntity) playlistRepository : Repository<PlaylistEntity>,

            ){}

 async create(createPlaylistDto: CreatePlaylistDto) {
      const newPlaylist = new PlaylistEntity()
      createPlaylistDto.playlist_name = newPlaylist.playlist_name
      createPlaylistDto.userId = newPlaylist.userId
    
     
  }

  findAll() {
    return `This action returns all playlist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playlist`;
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
