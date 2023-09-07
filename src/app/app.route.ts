import { Route } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';

export const APP_ROUTE: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent}
];
