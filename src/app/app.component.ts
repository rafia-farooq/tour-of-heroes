import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, NavComponent , HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
  today: Date = new Date();
}
