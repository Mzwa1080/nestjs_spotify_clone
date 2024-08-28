import { Injectable } from '@nestjs/common';
import { CreatePlaylistSongDto } from './dto/create-playlist-song.dto';
import { UpdatePlaylistSongDto } from './dto/update-playlist-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaylistSongEntity } from './entities/playlist-song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaylistSongService {
  constructor( @InjectRepository(PlaylistSongEntity)
  private readonly playlistSongRepository: Repository<PlaylistSongEntity>,) { }


  async create(createPlaylistSongDto: CreatePlaylistSongDto) {
    const songPlaylist = new PlaylistSongEntity()
    songPlaylist.playlistId = createPlaylistSongDto.playlistId;
    songPlaylist.songId = createPlaylistSongDto.songId;

    return await this.playlistSongRepository.save(songPlaylist);
  }

  async findAll() {
    return await this.playlistSongRepository.find();
  }

  async findOne(id: number) {
    return await this.playlistSongRepository.findBy({songId:id})
  }

  // update(id: number, updatePlaylistSongDto: UpdatePlaylistSongDto) {
  //   return `This action updates a #${id} playlistSong`;
  // }

  async remove(id: number) {
    return this.playlistSongRepository.delete(id)
  }
}

