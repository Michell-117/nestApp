import { Injectable, NotFoundException } from '@nestjs/common';
import { Game } from './interfaces/game.interface';

import {v4 as uuid} from 'uuid';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto.ts';

@Injectable()
export class GamesService {

    private games:Game[] = [
        {id:uuid(), game:'Halo 1 - Combat evolved', platform: ['xbox','pc'], year:2002},
        
        {id:uuid(), game:'Halo 2', platform: ['xbox','pc'], year:2004},

        {id:uuid(), game:'Halo 3', platform: ['xbox 360'], year:2007},

        {id:uuid(), game:'Halo wars', platform: ['xbox'], year:2009},

        {id:uuid(), game:'Halo 3: ODST', platform: ['xbox 360'], year:2009},

        {id:uuid(), game:'Halo Reach', platform: ['xbox 360','pc','xbox one'], year:2010},

        {id:uuid(), game:'Halo: Combat evolved Anniversary', platform: ['xbox 360','pc'], year:2011},

        {id:uuid(), game:'Halo 4', platform: ['xbox 360'], year:2012},

        {id:uuid(), game:'Halo Spartan Assault', platform: ['xbox 360','pc', 'xbox one'], year:2013},

        {id:uuid(), game:'Halo: Spartan Strike', platform: ['iphone','pc'], year:2015},

        {id:uuid(), game:'Halo 5: Guardians', platform: ['xbox one'], year:2015},

        {id:uuid(), game:'Halo 5: Forge', platform: ['xbox one','pc'], year:2016},

        {id:uuid(), game:'Halo Wars 2', platform: ['xbox one','pc'], year:2017},

        {id:uuid(), game:'Halo Wars: Definitive Edition', platform: ['xbox one','pc'], year:2017},

        {id:uuid(), game:'Halo Infinite', platform: ['xbox one','pc', 'xbox series'], year:2021},

        {id:uuid(), game:'Mass Effect', platform: ['xbox 360','pc', 'ps3'], year:2007},

        {id:uuid(), game:'Mass Effect 2', platform: ['xbox 360','pc', 'ps3'], year:2010},
        
        {id:uuid(), game:'Mass Effect 3', platform: ['xbox 360','pc', 'ps3'], year:2012},

        {id:uuid(), game:'Mass Effect: Infiltrator', platform: ['Android','iPhone'], year:2012},

        {id:uuid(), game:'Mass Effect Trilogía', platform: ['xbox 360','pc', 'ps3'], year:2012},

        {id:uuid(), game:'Mass Effect Andromeda', platform: ['xbox one','pc', 'ps4'], year:2017},

        {id:uuid(), game:'Mass Effect: Legendary Edition', platform: ['xbox one','xbox series', 'ps4', 'ps5', 'pc'], year:2021},

        {id:uuid(), game:'Mass Effect 5', platform: ['xbox series','pc', 'ps5'], year:2026},

    ]

    getAllGames(){
        return this.games
    }

    getGame(id:string){
        let juego =  this.games.find(game=>game.id===id)

        if(!juego){
            throw new NotFoundException(`El id ${id} no es un id valido`)
        }

        return juego
        
    }
    
    createGame(createGameDto: CreateGameDto){
        
        const newGame: Game = {
            id: uuid(),
            game: createGameDto.game,
            platform: [createGameDto.platform],
            year: parseInt(createGameDto.year)
        }

        // console.log(newGame)
        this.games.push(newGame)

        return newGame;
    }

    updateGame(id:string, updateGameDto: UpdateGameDto){
        let game =  this.games.find(g=>g.id===id)
        let indexGame = this.games.findIndex(g=>g.id === id)
        if(indexGame===-1)return `id: ${id} no valido`

        this.games[indexGame].game = updateGameDto.game
        this.games[indexGame].platform = [updateGameDto.platform]
        this.games[indexGame].year = parseInt(updateGameDto.year)

        return this.games[indexGame]
    }

    deleteGame(id:string){
        let juego = this.getGame(id)

        this.games = this.games.filter(game =>game.id!==id)

        return juego
    }
}
