import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';

@Module({
  imports: [GamesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
