import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaFaltasComponent} from "./lista-faltas/lista-faltas.component";


const routes: Routes = [
  {
    path: "listaFaltas",
    component: ListaFaltasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaFaltasRoutingModule { }
