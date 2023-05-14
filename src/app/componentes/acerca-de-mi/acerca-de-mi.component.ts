import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit{
  acercaDeMi:any;
baner:any;
  constructor(private datos:DatosService){}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{
    this.acercaDeMi=data.acercaDeMi;
    console.log("var en acercademi "+this.acercaDeMi.id);
    })
  }
}
