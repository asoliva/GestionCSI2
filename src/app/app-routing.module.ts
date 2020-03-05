import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: '',
    loadChildren: () => import('./horario/horario.module').then(m => m.HorarioModule)},
  {path: '',
    loadChildren: () => import('./profesores/profesores.module').then(m => m.ProfesoresModule)},
  {path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: '',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '',
    loadChildren: () => import('./parte/parte.module').then(m => m.ParteModule)},
  {path: '',
    loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule)},
  {path: '',
    loadChildren: () => import('./lista-faltas/lista-faltas.module').then(m => m.ListaFaltasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
