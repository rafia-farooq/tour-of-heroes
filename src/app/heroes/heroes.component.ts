import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for NgModel
import { Hero } from '../hero'; // Import interface
import { HEROES} from "../hero-list"

@Component({
  selector: 'app-heroes',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // static test hero
  // hero : Hero = {
  //   id : 1,
  //   name : "Windstorm"
  // };

  heroes = HEROES;
  selectedHero? : Hero;

  // method to show hero details on click
  onSelect(hero: Hero) : void{
    this.selectedHero = hero
  }
}
