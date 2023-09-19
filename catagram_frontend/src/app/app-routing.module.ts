import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {UmlComponent} from "./pages/uml/uml.component";
import {MeriseComponent} from "./pages/merise/merise.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'uml', component: UmlComponent },
  { path: 'merise', component: MeriseComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
