import { Component,OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
// habilitar = true
redes:any;




constructor (private data:DatosService){}

ngOnInit(): void {
  this.data.getDatos().subscribe (data =>{
    this.redes=data;
  }
    )
}
/* deshabilitado(){
  return this.habilitado;
} */
}
