import { Entidad } from "./Entidad";

export class Alumno extends Entidad {
    idAlumno: number;
    nombre : string;
    apellidos : string;
    fechaNacimiento : Date;    
    nombreFamiliar1: string;
    nombreFamiliar2: string;
    telefonoContacto1 : string;
    telefonoConstado2 : string;  
    notas : string;
  
    constructor() {
      super();
    }
  }