import { Inject, Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaylistEntity } from './entities/playlist.entity';
import { Repository } from 'typeorm';
// import { PlaylistSongEntity } from './entities/playlist-song.entity';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class PlaylistService {
  constructor(@InjectRepository(PlaylistEntity) private playlistRepository : Repository<PlaylistEntity>){}

 async create(createPlaylistDto: CreatePlaylistDto) {
     const newPlaylist = new PlaylistEntity();
     newPlaylist.playlist_name = createPlaylistDto.playlist_name;
     newPlaylist.userId = createPlaylistDto.userId;
   
     // Save the new playlist to the database
     return await this.playlistRepository.save(newPlaylist);
  }

  async findAll() {
    console.log(this.playlistRepository.find());
    return await this.playlistRepository.find() ;
  }

  findByUserId(id: number) {
    return this.playlistRepository.findBy({userId:id})
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistRepository.update(id, updatePlaylistDto);
  }

  remove(id: number) {
    return this.playlistRepository.delete(id);
  }
}
