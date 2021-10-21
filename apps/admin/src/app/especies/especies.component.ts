import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Especie } from '@starwars/data';
@Component({
  selector: 'starwars-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.scss']
})
export class EspeciesComponent implements OnInit {
  especies: Especie[] = [];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.fetchEspecies().subscribe(especies => this.especies = especies);
  }
}
