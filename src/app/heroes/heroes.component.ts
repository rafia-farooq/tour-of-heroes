import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero'; // Import interface
// import { HEROES} from "../hero-list";
// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-heroes',
  imports: [ CommonModule, RouterLink, MessagesComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // heroes = HEROES;
  heroes: Hero[] = [];

  // selectedHero? : Hero;

  // method to show hero details on click
  // onSelect(hero: Hero) : void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`Selected hero: ${hero.name}`)
  // }

  // inject an instance of HeroService when the component is created.
  constructor(private heroService: HeroService, private messageService : MessageService) {}

  // get list of heroes from the service
  // getHeroes() : void {
  //   this.heroes = this.heroService.getHeroes()
  // }

  // updated version for asyn Observable
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(list => this.heroes = list);
  }

  // call the above method in mgOnInit lifecycle hook
  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    // check for empty entries
    name = name.trim();
    if (!name) { return; }

    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero : Hero) : void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
