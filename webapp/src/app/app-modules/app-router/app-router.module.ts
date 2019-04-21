import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../../components/core/home.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {}
