import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-use-case-form",
  templateUrl: "./use-case-form.component.html",
  styleUrls: ["./use-case-form.component.scss"]
})
export class UseCaseFormComponent implements OnInit {
  @Input('_showUseCase1') _showUseCase1: Boolean;
  @Input('_showUseCase2') _showUseCase2: Boolean;

  constructor() {}

  ngOnInit() {}
}
