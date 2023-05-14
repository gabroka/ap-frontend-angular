import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
simbfcia:any=[];
acercademi:any=[];
  constructor(private data: DatosService) {}

  

  ngOnInit(): void {
    // trae los datos del json
      this.data.getDatos().subscribe(datos => {
        this.simbfcia = datos.banner;
        console.log("var simbfcia "+ this.simbfcia);
        this.acercademi = datos.acercaDeMi;
        console.log("var mifoto "+this.acercademi);
      });
    
  }
}
