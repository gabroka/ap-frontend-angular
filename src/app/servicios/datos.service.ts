import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private datos: HttpClient) { }
 
  getDatos(): Observable<any>{
    /* console.log(datos); */
    return this.datos.get('http://localhost:3306');
  }
}
// ../assets/bd/data.json