import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, NotFoundException } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SongService } from 'src/song/song.service';
import { CreateSongDto } from 'src/song/dto/create-song.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth('JWT-Auth')
@ApiTags('Playlist')
@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) { }

  @Post('create-playlist')
  // @UseGuards(AuthGuard)
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.create(createPlaylistDto);
  }

  @Get('all playlists')
  // @UseGuards(AuthGuard)
  findAll() {

    return this.playlistService.findAll();
  }

  @Get(':id')
  // @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.playlistService.findByUserId(+id);
  }

  @Put('update/:id')
  // @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistService.update(+id, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.playlistService.remove(+id);
      
    } catch (error) {
      throw new NotFoundException()
    }
  }
}
