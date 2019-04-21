import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRouterModule } from "./app-modules/app-router/app-router.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/core/home.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { UseCaseFormComponent } from './components/core/use-case-form/use-case-form.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SidenavComponent } from "./components/shared/sidenav/sidenav.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, UseCaseFormComponent, DashboardComponent, SidenavComponent],
  imports: [BrowserModule, AppRouterModule, MDBBootstrapModule.forRoot(), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
