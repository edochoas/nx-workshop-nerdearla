import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EspeciesComponent } from './especies/especies.component';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [AppComponent, EspeciesComponent, CharactersComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'especies', component: EspeciesComponent },
      { path: 'characters', component: CharactersComponent },
      { path: '', redirectTo: 'especies', pathMatch: 'full' },
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
