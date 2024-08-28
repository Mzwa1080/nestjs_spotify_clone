import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlaylistDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({})
    playlist_name : string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({})
    userId : number;
}
