import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';
import { EstudiosModule } from './estudios/estudios.module';

@Module({
  imports: [GamesModule, EstudiosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
