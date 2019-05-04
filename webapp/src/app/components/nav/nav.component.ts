import { Component, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})

export class NavComponent {
  @ViewChildren(MatSidenav) sidenav: MatSidenav;
  paths = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    switch (this.router.url) {
      case "/dashboard": {
        this.paths = [
          { name: 'Summary', route: '/create-events' },
          { name: 'Add Widget', route: '/dashboard' }
        ];
        break;
      }
      case "/create-events": {
        this.paths = [
          { name: 'Overview', route: '/create-events' }
        ];
        break;
      }
      default: {
        this.paths = [
          { name: 'Plan Events', route: '/create-events' },
          { name: 'Your Events', route: '/create-events' },
          { name: 'What\'s Hot!', route: '/create-events' },
          { name: 'Dashboard', route: '/dashboard' }
        ];
        break;
      }
    }
  }
}
