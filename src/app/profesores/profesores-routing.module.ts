import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfesoresComponent} from "./profesores/profesores.component";


const routes: Routes = [
  {
    path: "profesores",
    component: ProfesoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }
