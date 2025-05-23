import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

export const routes: Routes = [
    { path: 'heroes', component: HeroesComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'detail/:id', component: HeroDetailComponent},
    { path: 'form', component: HeroFormComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];