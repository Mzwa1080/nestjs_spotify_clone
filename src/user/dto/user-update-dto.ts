import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";


export class userUpdateDto{
    @ApiProperty({ description: 'first_name', example: 'mzwa' })
    @IsString()
    @IsOptional()
    first_name : string ;

    @ApiProperty({ description: 'last_name', example: 'louw' })
    @IsString()
    @IsOptional()
    last_name : string;

    @ApiProperty({ description: 'email', example: 'ml@gmail.com' })
    @IsString()
    @IsOptional()
    email : string;


    @ApiProperty({ description: 'passowrd', example: '123456' })
    @IsString()
    @IsOptional()
    password : string
}