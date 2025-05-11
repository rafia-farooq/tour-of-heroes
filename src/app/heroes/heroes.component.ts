import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero'; // Import interface
import { HEROES} from "../hero-list";
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  imports: [ CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero? : Hero;

  // method to show hero details on click
  onSelect(hero: Hero) : void{
    this.selectedHero = hero
  }
}
