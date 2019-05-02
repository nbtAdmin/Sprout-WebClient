import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRouterModule } from "./app-modules/app-router/app-router.module";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/core/home.component";
import { UseCaseFormComponent } from './components/core/use-case-form/use-case-form.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SidenavComponent } from "./components/shared/sidenav/sidenav.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SproutApiService } from "./services/sprout/sprout-api.service";
import { EventsCreateComponent } from './components/events/events-create/events-create.component';
import { EventsCreateNavComponent } from './components/events/events-create/events-create-nav/events-create-nav.component';
import { CustomSiteComponent } from './components/events/events-create/custom-site/custom-site.component';
import { NewEventFormComponent } from './components/events/events-create/new-event-form/new-event-form.component';
import { NewEventConfirmComponent } from './components/events/events-create/new-event-confirm/new-event-confirm.component';
import { NgMaterialModule } from "./app-modules/ng-material/ng-material.module";
import { NavComponent } from './components/shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    UseCaseFormComponent, 
    DashboardComponent, 
    SidenavComponent, EventsCreateComponent, EventsCreateNavComponent, CustomSiteComponent, NewEventFormComponent, NewEventConfirmComponent, NavComponent
  ],
  imports: [
    BrowserModule, 
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MDBBootstrapModule.forRoot(),
    NgMaterialModule, 
    BrowserAnimationsModule],
  providers: [SproutApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
