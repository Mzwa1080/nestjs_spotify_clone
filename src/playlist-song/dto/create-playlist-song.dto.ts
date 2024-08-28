import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePlaylistSongDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    playlistId : number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    songId : number;



}
