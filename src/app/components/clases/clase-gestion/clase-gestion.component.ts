import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data/data.service';

import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../../auth.service';

import {MatDialog} from '@angular/material';
import { element } from 'protractor';
import { Clase } from '../../../model/Clase';
import { ClaseDetalleComponent } from '../clase-detalle/clase-detalle.component';
import { DialogAceptarComponent } from '../../comun/dialog-aceptar/dialog-aceptar.component';

@Component({
  selector: 'app-clase-gestion',
  templateUrl: './clase-gestion.component.html',
  styleUrls: ['./clase-gestion.component.scss']
})
export class ClaseGestionComponent implements OnInit {

  constructor(public auth: AuthService, public dialog: MatDialog, private dataService: DataService) {
  }

  displayedColumns = ['curso', 'anio', 'tipoClase', 'fechaCreacion', 'edit', 'delete'];
  dataSource = new GestionClaseDataSource(this.dataService);

  deleteClase(id) {
    //if (this.auth.isAuthenticated()) {

      const dialogRef = this.dialog.open(DialogAceptarComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.info('resultado:' + result);
        if (result == true) {
          this.dataService.deleteClase(id);
          this.dataSource = new GestionClaseDataSource(this.dataService);
        }
      });
    //} else {
      //alert('Login in Before');
    //}
  }

  openDialog() : void {
    let dialogRef = this.dialog.open(ClaseDetalleComponent, {
      width: '600px'      
    });

    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addClase(result.data);
      this.dataSource = new GestionClaseDataSource(this.dataService);
    });
  }

  editPost(id): void {
    
    var elemento = this.dataService.getClase(id);
    
    let dialogRef = this.dialog.open(ClaseDetalleComponent, {
      width: '600px',
      data: elemento
    });
    
    //Este es el código que se ejecutará una vez se acepte la ventana
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new GestionClaseDataSource(this.dataService);
    });
  }

  ngOnInit() {
  }

}

export class GestionClaseDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Clase[]> {
    return this.dataService.getListClases();
  }

  disconnect() {
  }
}
