import { Entidad } from "./Entidad";
import { Clase } from "./Clase";
import { Alumno } from "./Alumno";

export class ClaseAlumno extends Entidad {

    private clase : Clase;
    private alumno : Alumno;

    constructor() {
        super();
    }
}