import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParteRoutingModule } from './parte-routing.module';
import { ParteComponent } from './parte/parte.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ParteComponent],
  imports: [
    CommonModule,
    ParteRoutingModule,
    FormsModule
  ]
})
export class ParteModule { }
