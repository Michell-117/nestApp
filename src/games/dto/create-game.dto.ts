import { IsString, MinLength } from "class-validator";

export class CreateGameDto{

    @IsString({ message:`El parametro 'game' no esta definido`})
    @MinLength(2)
    readonly game:string;
    
    @IsString({message:`El parametro 'platform' no esta definido`})
    @MinLength(2)
    readonly platform:string;

    @IsString({message:`El parametro 'year' no esta definido`})
    @MinLength(4)
    readonly year:string;
}