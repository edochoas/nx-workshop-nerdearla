import { Controller, Get } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { EspeciesService } from './especies.service';

@Controller()
export class AppController {
  constructor(
    private readonly especiesService: EspeciesService,
    private readonly charactersService: CharactersService,
  ) {}

  @Get('especies') 
  getEspecies() {
    return this.especiesService.getAll();
  } 
  
  @Get('characters')
  getCharacters() {
    return this.charactersService.getAll();
  }
}
