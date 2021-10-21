import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'starwars-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() title = '' 
}
