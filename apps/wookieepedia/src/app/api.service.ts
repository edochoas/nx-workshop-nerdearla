import { Injectable } from '@angular/core';
import { Character, Especie } from './shared';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = 'http://localhost:4200/api';
  
  constructor(
    private http: HttpClient
  ) {}

  fetchEspecies() {
    return this.http.get<Especie[]>(`${this.endpoint}/especies`);
  } 

  fetchCharacters() {
    return this.http.get<Character[]>(`${this.endpoint}/characters`);
  }
}
