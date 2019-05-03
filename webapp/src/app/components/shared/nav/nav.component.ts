import {Component, AfterViewInit, ViewChildren} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  @ViewChildren(MatSidenav) sidenav: MatSidenav;
  paths = [
    { name: 'Events', route: '/create-events' },
    { name: 'Dashboard', route: '/dashboard' }
  ];

  constructor() { 
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }  
}
