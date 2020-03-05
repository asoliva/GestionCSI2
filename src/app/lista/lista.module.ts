import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';


@NgModule({
  declarations: [ListaAlumnosComponent],
  exports: [
    ListaAlumnosComponent
  ],
  imports: [
    CommonModule,
    ListaRoutingModule
  ]
})
export class ListaModule { }
