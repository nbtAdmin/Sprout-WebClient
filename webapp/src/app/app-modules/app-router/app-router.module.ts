import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../../components/core/home.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { EventsCreateComponent } from "../../components/events/events-create/events-create.component";
import { LoginComponent } from "../../components/auth/login/login.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path:"login", component:LoginComponent },
  { path: "dashboard", component: DashboardComponent }, 
  { path:"create-events", component: EventsCreateComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {}
