import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaAlumnosComponent} from "./lista-alumnos/lista-alumnos.component";


const routes: Routes = [
  {
    path: "lista",
    component: ListaAlumnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaRoutingModule { }
