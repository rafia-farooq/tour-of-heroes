import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService : HeroService) { }
 
  getHeroes() : void {
    this.heroService.getHeroes()
    .subscribe(list => this.heroes = list.slice(1, 5));
  }

  ngOnInit() : void {
    this.getHeroes()
  }
}
