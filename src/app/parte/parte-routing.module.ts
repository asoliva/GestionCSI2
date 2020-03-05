import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParteComponent} from "./parte/parte.component";


const routes: Routes = [
  {
    path: "parte",
    component: ParteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParteRoutingModule { }
