import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

url='http://localhost:8080';
  constructor(private datos: HttpClient) { }
 
  public getDatos(): Observable<Persona>{
    /* console.log(datos); */
    return this.datos.get<Persona>(`${this.url}/personas/traer/perfil`);
  }
}
// ../assets/bd/data.json