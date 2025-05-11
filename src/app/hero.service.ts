import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // getHeroes(): Hero[] {
  // return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}

  constructor() { }
}
