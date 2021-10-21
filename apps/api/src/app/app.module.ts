import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { CharactersService } from './characters.service';
import { EspeciesService } from './especies.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [EspeciesService, CharactersService],
})
export class AppModule {}
