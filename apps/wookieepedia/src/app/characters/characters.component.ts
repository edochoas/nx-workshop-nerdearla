import { Component, OnInit } from '@angular/core';

export interface Character {
  name: string;
  image: string;
  description: string;
  especie?:string;
}

const CHARACTERS = [
  {
    name: 'darth vader',
    image: 'assets/characters/darth_vader.jpg',
    description:
      'Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empire’s eradication of the Jedi Order',
  },
  {
    name: 'luke skywalker',
    image: 'assets/characters/luke.jpg',
    description:
      'Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. ',
  },
  {
    name: 'ashoka tano',
    image: 'assets/characters/ashoka_tano.png',
    description:
      ' A togruta female, was the Padawan learner to Anakin Skywalker and a hero of the Clone Wars. Alongside Anakin, she grew from headstrong student into a mature leader. ',
  },
  {
    name: 'r2-d2',
    image: 'assets/characters/r2d2.png',
    description:
      "A skilled starship mechanic and fighter pilot's assistant, he has an unlikely but enduring friendship with the fussy protocol droid C-3PO.",
  },
  {
    name: 'yoda',
    image: 'assets/characters/yoda.png',
    description:
      'Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years',
  },
  {
    name: 'bobba fett',
    image: 'assets/characters/boba_fett.jpg',
    description:
      'With his customized Mandalorian armor, deadly weaponry, and silent demeanor, Boba Fett was one of the most feared bounty hunters in the galaxy.',
  },
];

@Component({
  selector: 'starwars-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characters: Character[] = CHARACTERS;
}
