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
import { ClaseComponent } from './components/clase/clase.component';


@NgModule({
  declarations: [
    AppComponent, 
    HelloWorld, 
    Componente2Component,
	  WelcomeComponent,
    DashboardComponent,
	  PostDialogComponent,
	  ClaseComponent
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
  providers: [DataService, 
    AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent
  ]
})
export class AppModule { }