import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data/data.service';
import { Clase } from 'src/app/model/Clase';

@Component({
  selector: 'app-clase-detallealumnos',
  templateUrl: './clase-detallealumnos.component.html',
  styleUrls: ['./clase-detallealumnos.component.scss']
})
export class ClaseDetalleAlumnosComponent implements OnInit {

  idClase : number;
  detalleClase : Clase;

  constructor(private rutaActiva: ActivatedRoute, private dataService: DataService) { 
   
  }

  ngOnInit() {    
    this.idClase = this.rutaActiva.snapshot.params.idClase;    
    this.detalleClase = this.dataService.getClase(this.idClase);
  }

}
