import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Hero } from '../hero'; // Import interface
import { FormsModule } from '@angular/forms'; // Import FormsModule for NgModel

@Component({
  selector: 'app-hero-detail',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
