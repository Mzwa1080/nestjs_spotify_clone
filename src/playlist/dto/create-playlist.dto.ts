import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlaylistDto {
    @IsString()
    @IsNotEmpty()
    playlist_name : string;

    @IsNumber()
    @IsNotEmpty()
    userId : number;
}
