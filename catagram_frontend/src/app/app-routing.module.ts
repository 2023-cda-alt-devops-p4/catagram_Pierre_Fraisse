import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {DiagramPageComponent} from "./pages/diagram-page/diagram-page.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'uml', component: DiagramPageComponent, data: {modelType: 'uml'} },
  { path: 'merise', component: DiagramPageComponent, data: {modelType: 'merise'} }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
