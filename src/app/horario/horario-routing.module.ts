import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HorarioComponent} from "./horario/horario.component";


const routes: Routes = [
  {
    path: "horario",
    component: HorarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorarioRoutingModule { }
