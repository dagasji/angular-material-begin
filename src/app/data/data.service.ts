import {Injectable} from '@angular/core';
import {Post} from '../Post';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Clase } from '../model/Clase';

@Injectable()
export class DataService {

  ELEMENT_DATA: Post[] = [
    {position: 0, title: '3º A', anio : '2018', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: '1º C', anio : '2018', category: 'Android Development', date_posted: new Date(), body: 'Body 2'},
    {position: 2, title: '2º B', anio : '2018', category: 'IOS Development', date_posted: new Date(), body: 'Body 3'},
    {position: 3, title: 'Post Four', anio : '2018', category: 'Android Development', date_posted: new Date(), body: 'Body 4'},
    {position: 4, title: 'Post Five', anio : '2018', category: 'IOS Development', date_posted: new Date(), body: 'Body 5'},
    {position: 5, title: 'Post Six', anio : '2018', category: 'Web Development', date_posted: new Date(), body: 'Body 6'},
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

  ELEMENT_CLASES: Clase[] = [
    {idClase : 1, titulo: '3º A', anio : '2018', tipoClase: {id : 1, descripcion : 'Primaria'}, fechaAlta: new Date(), fechaModificacion : null, descripcion : ''},
    {idClase : 1, titulo: '3º A', anio : '2018', tipoClase: {id : 1, descripcion : 'Primaria'}, fechaAlta: new Date(), fechaModificacion : null, descripcion : ''},
    {idClase : 1, titulo: '3º A', anio : '2018', tipoClase: {id : 1, descripcion : 'Primaria'}, fechaAlta: new Date(), fechaModificacion : null, descripcion : ''},
    {idClase : 1, titulo: '3º A', anio : '2018', tipoClase: {id : 1, descripcion : 'Primaria'}, fechaAlta: new Date(), fechaModificacion : null, descripcion : ''},
    {idClase : 1, titulo: '3º A', anio : '2018', tipoClase: {id : 1, descripcion : 'Primaria'}, fechaAlta: new Date(), fechaModificacion : null, descripcion : ''},
    {idClase : 2, titulo: '1º A', anio : '2018', tipoClase: {id : 1, descripcion : 'Primaria'}, fechaAlta: new Date(), fechaModificacion : null, descripcion : ''}
  ];

  constructor() {
  }

  getData(): Observable<Post[]> {
    return Observable.of<Post[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  getElemento(index) {
    return this.ELEMENT_DATA[index];
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }

  /**
   * Mock para obtener lista de clases
   */
  getListClases(): Observable<Clase[]> {
    return Observable.of<Clase[]>(this.ELEMENT_CLASES);
  }

  deleteClase(idClase) {
    for (let index = 0; index < this.ELEMENT_CLASES.length; index++) {
      const element = this.ELEMENT_CLASES[index];
      if (element.idClase == idClase) {
        this.ELEMENT_CLASES.splice(index, 1);
        break;
      }      
    }

  }

  addClase(data : Clase) {
    
    this.ELEMENT_CLASES.push(data);
    alert(data.descripcion);
  }
}
