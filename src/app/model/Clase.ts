import { TipoClase } from "./TipoClase";

export interface IClase {
  idClase: number;
  titulo : string
  anio : string
  tipoClase: TipoClase;
  fechaAlta: Date;
  fechaModificacion : Date
  descripcion : string;  
}

export class Clase implements IClase {
  idClase: number;
  titulo : string;
  anio : string;
  tipoClase: TipoClase;
  fechaAlta: Date;
  fechaModificacion : Date
  descripcion : string;  

  constructor() {
    this.tipoClase = new TipoClase();
  }
}
