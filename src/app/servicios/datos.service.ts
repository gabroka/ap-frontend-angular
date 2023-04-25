import { Injectable } from '@angular/core';
//el observable suscribe a los datos y que reciba una respuesta asincrona
import { Observable } from 'rxjs';
//hacer peticiones y crud
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  /* http : any; */
  constructor(private nom_y_ap: HttpClient) {}
//metodo observable que devuelve datos. la variable nomb_y_p es la que yo quiera poner
  getDatos(): Observable<any> {
    //retorno de datos utilizando el metodo get ed httpclient que llama a la
    //base de datos json o a una url
    console.log("el servicio esta corriendo");
    return this.nom_y_ap.get('../assets/data/data.json');
  }
}
