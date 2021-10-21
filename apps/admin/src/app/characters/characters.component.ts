import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Character } from '@starwars/data';

@Component({
  selector: 'starwars-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.fetchCharacters().subscribe(characters => this.characters = characters);
  }
}
