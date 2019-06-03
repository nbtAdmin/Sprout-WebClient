import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../../components/core/home.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { EventsCreateComponent } from "../../components/events/events-create/events-create.component";
import { TemplateComponent } from "../../components/template/template.component";
import { LoginComponent } from "../../components/auth/login/login.component";
import { WidgetComponent } from "../../components/widget/widget.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path:"login", component:LoginComponent },
  { path: "dashboard", component: DashboardComponent }, 
  { path:"create-events", component: EventsCreateComponent },
  { path:"plan-events", component: TemplateComponent },
  { path:"add-events", component: TemplateComponent },
  { path:"add-widgets", component: WidgetComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {}
