export interface IClase {
  idClase: number;
  titulo : string
  anio : string
  tipoClase: {
    id : number,
    descripcion : string
  };
  fechaAlta: Date;
  fechaModificacion : Date
  descripcion : string;  
}

export class Clase implements IClase {
  idClase: number;
  titulo : string;
  anio : string;
  tipoClase: {
    id : number,
    descripcion : string
  };
  fechaAlta: Date;
  fechaModificacion : Date
  descripcion : string;  

  constructor() {
    this.tipoClase = {descripcion : '', id : null };
  }
}
