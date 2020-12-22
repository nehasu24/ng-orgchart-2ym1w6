import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "./core/core.module";

import { HomeComponent } from "./core/home/home.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
