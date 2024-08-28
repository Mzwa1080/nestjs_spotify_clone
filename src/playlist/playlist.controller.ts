import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { ApiTags } from '@nestjs/swagger';
import { SongService } from 'src/song/song.service';
import { CreateSongDto } from 'src/song/dto/create-song.dto';

@ApiTags('Playlist')
@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.create(createPlaylistDto);
  }

  //create end point ot add song to playlist
  // add songs to playlist
// adding songs to playlist requires songId and playlistId
// playlist and song as params

  @Post('add-to-playlist')
    addSongToPlaylist(@Body() songId:CreateSongDto, @Body() playlistId : CreatePlaylistDto){
      // from the parameters I only want the songId ne, coming from the artistId in the songId
      
    }

  @Get()
  findAll() {
    return this.playlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistService.update(+id, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistService.remove(+id);
  }
}
