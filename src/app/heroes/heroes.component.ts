import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero'; // Import interface
// import { HEROES} from "../hero-list";
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  imports: [ CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // heroes = HEROES;
  heroes: Hero[] = [];

  selectedHero? : Hero;

  // method to show hero details on click
  onSelect(hero: Hero) : void{
    this.selectedHero = hero
  }

  // inject an instance of HeroService when the component is created.
  constructor(private heroService: HeroService) {}

  // get list of heroes from the service
  getHeroes() : void {
    this.heroes = this.heroService.getHeroes()
  }
  // call the above method in mgOnInit lifecycle hook
  ngOnInit(): void {
  this.getHeroes();
}
}
