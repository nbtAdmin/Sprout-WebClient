import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mock",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  
  public _showUseCase1: Boolean = false;
  public _showUseCase2: Boolean = false;

  constructor() {}

  ngOnInit() {}

  selectUseCase1() {
    this._showUseCase1 = true;
    this._showUseCase2 = false;
  }

  selectUseCase2() {
    this._showUseCase2 = true;
    this._showUseCase1 = false;
  }
  
  
}
