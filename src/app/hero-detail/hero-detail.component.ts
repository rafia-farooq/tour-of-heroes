import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Hero } from '../hero'; // Import interface
import { FormsModule } from '@angular/forms'; // Import FormsModule for NgModel
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
  ) {}

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
  this.location.back();
  }

  update(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
