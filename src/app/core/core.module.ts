import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import { FooterComponent } from './shell/footer/footer.component';



@NgModule({
  declarations: [ShellComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [ShellComponent, HeaderComponent, FooterComponent]
})
export class CoreModule { }
