import {Component, AfterViewInit, ViewChildren} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent {
  @ViewChildren(MatSidenav) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean = true;

  constructor() { }

  ngAfterViewInit() {
    
    console.log(this.sidenav);
  }

  ngOnInit() {
  }
}
