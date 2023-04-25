import { Component, OnInit } from '@angular/core';
import { DatosService } from './servicios/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  estado = true;
  title = 'prueba';
  apellidotraido = '';
  nombreyapellido : any =[];
  //traigo-datos es la variable, uso la que yo quiera
constructor(private datos:DatosService) {}
  
ingresoPass(){

}


  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
      //nomyap es la que esta declarada en el constructor del servicio 
      this.nombreyapellido = data.nomyap;
      this.title = data.apellido;
      this.apellidotraido = data.nombre;
    })
  }
}
