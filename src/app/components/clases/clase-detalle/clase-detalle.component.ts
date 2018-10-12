import {Component, EventEmitter, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../../data/data.service';
import { Clase } from 'src/app/model/Clase';

@Component({
  selector: 'app-clase-detalle',
  templateUrl: './clase-detalle.component.html',
  styleUrls: ['./clase-detalle.component.scss']
})
export class ClaseDetalleComponent {

  detalleClase : Clase = new Clase()
  
  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ClaseDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService) {

    if (data != null) {
      this.detalleClase = data;      
    }
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {  
    this.event.emit({data: this.detalleClase});
    this.dialogRef.close();
  }

  tiposClase = this.dataService.getTipoClase();

  compareObjects(o1: any, o2: any): boolean {    
    return o1 != null && o2 != null && o1.id === o2.id;
  }
}
