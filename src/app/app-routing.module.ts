import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {ClaseGestionComponent} from './components/clases/clase-gestion/clase-gestion.component';
import { ClaseDetalleAlumnosComponent } from './components/clases/clase-detallealumnos/clase-detallealumnos.component';
import { AlumnoGestionComponent } from './components/alumnos/alumno-gestion/alumno-gestion.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'test', component: DashboardComponent},
  {path: 'classroom', component: ClaseGestionComponent},
  {path: 'classroom/:idClase', component: ClaseDetalleAlumnosComponent},
  {path: 'alumno', component: AlumnoGestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
