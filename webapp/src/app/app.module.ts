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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SproutApiService } from "./services/sprout/sprout-api.service";
import { EventsCreateComponent } from './components/events/events-create/events-create.component';
import { EventsPlanComponent } from './components/events/events-plan/events-plan.component';
import { CustomSiteComponent } from './components/events/events-create/custom-site/custom-site.component';
import { NewEventFormComponent } from './components/events/events-create/new-event-form/new-event-form.component';
import { NewEventConfirmComponent } from './components/events/events-create/new-event-confirm/new-event-confirm.component';
import { NgMaterialModule } from "./app-modules/ng-material/ng-material.module";
import { AuthService } from "./services/auth/auth.service";
import { LoginComponent } from './components/auth/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    UseCaseFormComponent, 
    DashboardComponent,  
    EventsCreateComponent, 
    CustomSiteComponent, 
    NewEventFormComponent, 
    NewEventConfirmComponent, 
    LoginComponent,
    CustomSiteComponent, 
    NewEventFormComponent, 
    NewEventConfirmComponent, 
    NavComponent, 
    WidgetComponent,
    EventsPlanComponent
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
  providers: [SproutApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
