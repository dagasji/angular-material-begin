import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

//Componente propios
import { HelloWorld } from './primercomponente/primer.component';
import { Componente2Component } from './componente2/componente2.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

import { DataService } from './data/data.service';
import { AuthService } from './auth.service';
import { ClaseGestionComponent } from './components/clases/clase-gestion/clase-gestion.component';
import { ClaseDetalleComponent } from './components/clases/clase-detalle/clase-detalle.component';
import { DialogAceptarComponent } from './components/comun/dialog-aceptar/dialog-aceptar.component';
import { ClaseDetalleAlumnosComponent } from './components/clases/clase-detallealumnos/clase-detallealumnos.component';
import { AlumnoGestionComponent } from './components/alumnos/alumno-gestion/alumno-gestion.component';
import { AlumnoMockService } from './services/mocks/data.service';


@NgModule({
  declarations: [
    AppComponent, 
    HelloWorld, 
    Componente2Component,
	  WelcomeComponent,
    DashboardComponent,
	  PostDialogComponent,
	  ClaseGestionComponent,
	  ClaseDetalleComponent,
	  DialogAceptarComponent,
	  ClaseDetalleAlumnosComponent,
	  AlumnoGestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    DataService, 
    AuthService,
    AlumnoMockService],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent, 
    ClaseDetalleComponent,
    DialogAceptarComponent
  ]
})
export class AppModule { }