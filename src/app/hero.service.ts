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

  constructor(private messageService : MessageService) { }
}
