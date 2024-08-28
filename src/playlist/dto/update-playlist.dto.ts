import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePlaylistDto } from './create-playlist.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdatePlaylistDto extends PartialType(CreatePlaylistDto) {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({})
    @Optional()
    playlist_name : string;

    // @IsNumber()
    // @IsNotEmpty()
    // @ApiProperty({})
    // userId : number;
}
