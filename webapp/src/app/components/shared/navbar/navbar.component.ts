import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public _showSideNav: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showSideNav() {
    this._showSideNav = !this._showSideNav;
  }

}
