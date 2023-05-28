import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css'],
})
export class AcercaDeMiComponent implements OnInit {
  
  public persona: Persona= new Persona("","","","","","");
  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.persona = data;
      console.log('var en acercademi ' + this.persona.id);
    });
  }
}
//Persona().subscribe(data => {
  //this.persona = data;