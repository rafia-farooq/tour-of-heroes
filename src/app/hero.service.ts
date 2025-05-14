import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // getHeroes(): Hero[] {
  // return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add("List has successfully been fetched!");
  this.messageService.add("You can close this message by clicking on the button >>>");
  return heroes;
}

getHero(id: number): Observable<Hero> {
  const hero = HEROES.find(h => h.id === id)!;
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(hero);
}

  constructor(private messageService : MessageService) { }

  updateHero(hero: Hero): Observable<Hero> {
    const index = HEROES.findIndex(h => h.id === hero.id);
    if (index !== -1) {
      HEROES[index] = { ...hero };
      console.log(`Updated hero locally: id=${hero.id}`);
    }
    return of(hero);
  }

  addHero(hero: Hero): Observable<Hero> {
    hero.id = HEROES.length + 11;
    console.log( `New hero add ${hero.name} at id=${hero.id}`);
    return of(hero);
  }

  deleteHero(id: number): Observable<Hero | undefined> {
  const newList = HEROES.findIndex(h => h.id === id);

  if (newList > -1) {
    const deletedHero = HEROES[newList];
    HEROES.splice(newList, 1); // Remove hero from array
    console.log(`deleted hero id=${id}`);
    return of(deletedHero);
  } else {
    console.log(`hero with id=${id} not found`);
    return of(undefined);
  }
  }

  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();
    if (!term) {
      return of([]);
    }

    const matchingHeroes = HEROES.filter(hero =>
      hero.name.toLowerCase().includes(term.toLowerCase())
    );

    console.log(
      matchingHeroes.length
        ? `found heroes matching "${term}"`
        : `no heroes matching "${term}"`
    );

    return of(matchingHeroes);
  }


}
