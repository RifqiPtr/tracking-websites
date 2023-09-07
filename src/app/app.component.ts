import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HomeComponent,
    AboutUsComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracking-websites';
}
