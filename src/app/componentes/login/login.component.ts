import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estado: boolean=true;
  user: any;
  password: any;
  nombre: any;
  us:any;
  constructor(private usuario:DatosService) {}


  ngOnInit(): void  {
    this.usuario.getDatos().subscribe(usuario =>{
      this.user = usuario.user;
      this.password = usuario.redes;
      this.nombre=usuario.nombre;
      console.log(this.user)
      console.log(this.password)

    })
  }
}