import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isAboutUs: boolean = false;
  isTracking: boolean = false;
  constructor(
    private router: Router
  ){}

  onAboutUs() {
    this.isAboutUs = !this.isAboutUs;
    this.router.navigate(['/about-us']);
  }

  onTracking() {
    this.isTracking = !this.isTracking;
    this.router.navigate(['/home']);
  }
}
