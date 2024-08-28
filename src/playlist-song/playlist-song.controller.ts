import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PlaylistSongService } from './playlist-song.service';
import { CreatePlaylistSongDto } from './dto/create-playlist-song.dto';
import { UpdatePlaylistSongDto } from './dto/update-playlist-song.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Playlist And Songs')
@Controller('playlist-song')
export class PlaylistSongController {
  constructor(private readonly playlistSongService: PlaylistSongService) {}

  @Post()
  create(@Body() createPlaylistSongDto: CreatePlaylistSongDto) {
    return this.playlistSongService.create(createPlaylistSongDto);
  }

  @Get()
  findAll() {
    return this.playlistSongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistSongService.findOne(+id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updatePlaylistSongDto: UpdatePlaylistSongDto) {
  //   return this.playlistSongService.update(+id, updatePlaylistSongDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistSongService.remove(+id);
  }
}
