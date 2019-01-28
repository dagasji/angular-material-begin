import { Component, OnInit } from '@angular/core';
import { AlumnoMockService } from 'src/app/services/mocks/data.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Alumno } from 'src/app/model/Alumno';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumno-gestion',
  templateUrl: './alumno-gestion.component.html',
  styleUrls: ['./alumno-gestion.component.scss']
})
export class AlumnoGestionComponent implements OnInit {

  filtro : string;
  filtroAlumno : FiltroAlumno;

  ngOnInit() {
  }

  constructor(public dialog: MatDialog, private dataService: AlumnoMockService) {
    this.filtroAlumno = new FiltroAlumno();
  }

  displayedColumns = ['nombre', 'apellidos', 'fechaNacimiento', 'edit', 'delete'];
                    
  dataSource = new GestionAlumnoDataSource(this.dataService);

  onSubmit(): void {
    this.dataSource = new GestionAlumnoDataSource(this.dataService)  
    this.dataSource.filtro = this.filtroAlumno;
   // this.dataSource.connect();
  }
/*
  deleteClase(id) {
    //if (this.auth.isAuthenticated()) {

      const dialogRef = this.dialog.open(DialogAceptarComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {
          this.dataService.deleteClase(id);
          this.dataSource = new GestionClaseDataSource(this.dataService);
        }
      });
    //} else {
      //alert('Login in Before');
    //}
  }
/*
  openDialog() : void {
    let dialogRef = this.dialog.open(ClaseDetalleComponent, {
      width: '600px'      
    });

    dialogRef.componentInstance.event.subscribe((result) => {
      console.info('metodo callback');
      result.data.fechaAlta = new Date();
      this.dataService.addClase(result.data);
      this.dataSource = new GestionClaseDataSource(this.dataService);
    });
  }*/
/*
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
*/
 

}

export class GestionAlumnoDataSource extends DataSource<any> {

  filtro : FiltroAlumno;

  constructor(private dataService: AlumnoMockService) {
    super();
  }

  connect(): Observable<Alumno[]> {
    console.info('entro en listar');
    return this.dataService.getListAlumnos(this.filtro);
  }

  disconnect() {
  }
}

export class FiltroAlumno {

  nombre : string;
  apellidos : string
  anioNacimiento : string;

  constructor() {

  }
}


