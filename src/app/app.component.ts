import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [CommonModule, NavComponent, MessagesComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
  today: Date = new Date();
}
