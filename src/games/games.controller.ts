import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto.ts';

@Controller('games')
// @UsePipes( ValidationPipe )  ------> validacion a nivel global de controlador
export class GamesController {
    constructor(
        private readonly gameService: GamesService
    ){}

    @Get()
    getAllGames(){
        // console.log('hola')
        return this.gameService.getAllGames()
    }

    @Get(':id')
    getOneGameById(@Param('id', ParseUUIDPipe) id:string){
        return this.gameService.getGame(id)
    }
    
    @Post()
    // @UsePipes( ValidationPipe )  ------> validacion a nivel de controlador
    newGame(@Body() createGameDto:CreateGameDto){
        // console.log(createGameDto)
        return this.gameService.createGame(createGameDto)
    }

    @Patch(':id')
    updateGame(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateGameDto:UpdateGameDto,
    ){
        // let juego = this.getOneGameById(id)
        // console.log(juego)
        
        return this.gameService.updateGame(id,updateGameDto)
    }

    @Delete(':id')
    eliminarJuegoById(@Param('id', ParseUUIDPipe) id:string){
       return this.gameService.deleteGame(id)
    }
}
