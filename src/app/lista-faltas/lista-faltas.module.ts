import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaFaltasRoutingModule } from './lista-faltas-routing.module';
import { ListaFaltasComponent } from './lista-faltas/lista-faltas.component';
import {ListaModule} from "../lista/lista.module";


@NgModule({
  declarations: [ListaFaltasComponent],
  imports: [
    CommonModule,
    ListaFaltasRoutingModule,
    ListaModule
  ]
})
export class ListaFaltasModule { }
