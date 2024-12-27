import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateGameDto{

    @IsString({ message:`El parametro 'id' no esta definido`})
    @IsUUID()
    @IsOptional()
    @MinLength(35)
    readonly id?:string;
    
    @IsString({ message:`El parametro 'game' no esta definido`})
    @IsOptional()
    @MinLength(2)
    readonly game?:string;

    @IsString({message:`El parametro 'platform' no esta definido`})
    @MinLength(2)
    @IsOptional()
    readonly platform?:string;

    @IsString({message:`El parametro 'year' no esta definido`})
    @MinLength(4)
    @IsOptional()
    readonly year?:string;
}