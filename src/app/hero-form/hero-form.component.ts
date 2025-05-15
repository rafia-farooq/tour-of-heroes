import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroClass } from '../hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new HeroClass(25, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(`New Hero ${this.model.name} added`)
  }
}
