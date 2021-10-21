import { Injectable } from '@nestjs/common';

export interface Especie {
  name: string;
  description: string;
  image: string;
  planet: string;
}

const ESPECIES = [
  {
    name: "twi'leks",
    image: 'assets/especies/twilek.png',
    description:
      "Twi'leks are tall, thin humanoids with skin pigment that spans a rainbow of colors. Their most distinctive feature is a pair of shapely prehensile tentacles that grow from the base of their skulls",
    planet: 'Ryloth',
  },
  {
    name: 'ewok',
    image: 'assets/especies/ewok.jpg',
    description:
      'The Ewoks are sentient furred bipeds native to the moon of Endor. They are curious individuals that stand about one meter tall',
    planet: 'Endor',
  },
  {
    name: 'wookie',
    image: 'assets/especies/wookie.png',
    description:
      'Shaggy giants from an arboreal world, the tall and commanding Wookiee species is an impressive sight to even the most jaded spacer',
    planet: 'Kashyyyk',
  },
  {
    name: 'rodian',
    image: 'assets/especies/rodian.png',
    description:
      'Rodians are a reptilian species with antennae, green and scaled skin, large round pupil-less eyes, and snouts from the planet Rodia.',
    planet: 'Rodia',
  },
  {
    name: 'toydarian',
    image: 'assets/especies/toydarian.jpg',
    description:
      'Toydarian are fly-like humanoids, with wings, a snout, and webbed feed. They are known to be strong-willed and resistant to manipulation through the Force.',
    planet: 'Toydaria',
  },
  {
    name: 'hutt',
    image: 'assets/especies/hutt.png',
    description:
      'Hutts are large, slug-like creatures known to be gangsters. They control Tatooine and are involved in organized crime throughout the galaxy.',
    planet: 'Nal Hutta',
  },
];

@Injectable()
export class EspeciesService {
  getAll(): Promise<Especie[]> {
    return new Promise((res) => res(ESPECIES));
  }
}
