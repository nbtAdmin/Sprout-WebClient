import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRouterModule } from "./app-modules/app-router/app-router.module";

import { AppComponent } from "./app.component";
import { MockComponent } from "./components/mock/mock.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UseCaseFormComponent } from './components/mock/use-case-form/use-case-form.component';

@NgModule({
  declarations: [AppComponent, MockComponent, NavbarComponent, UseCaseFormComponent],
  imports: [BrowserModule, AppRouterModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
