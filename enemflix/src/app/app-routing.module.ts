import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core"

const routes: Routes = [
  {path: "", component: },
  {path: "wacth/:id", component: },
  {path: "/informacoes", component: },
];


@NgModule({
  imports: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
});

export class AppRoutingComponent {}

