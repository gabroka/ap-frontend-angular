import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EstadologinService } from 'src/app/servicios/estadologin.service';

@Component({
  selector: 'app-modal-btn-login',
  templateUrl: './modal-btn-login.component.html',
  styleUrls: ['./modal-btn-login.component.css'],
})

// la clase con el implements OnInit hace que se ejecute junto al inicio del modulo
export class ModalBtnLoginComponent implements OnInit {
// user toma el nombre de usuario que llega desde el json via el servicio DatosService
  user: any;
  // estadouser evalua si es usuario es el correcto
  estadouser: Boolean = false;
  // estadopass evalua si la password es el correcto
  estadopass: Boolean = false;
  // pass toma la contraseña ingresada por el usuario
  pass = '';
  // useringresado toma el usuario ingresado por el usuario
  useringresado = '';
  // password toma la contraseña que llega desde el json via el servicio DatosService
  password: string = '';

  constructor(private log: DatosService, private estadologin: EstadologinService) {}

  ngOnInit(): void {// trae los datos del json
    this.log.getDatos().subscribe((datos) => {
      this.user = datos.username;
      this.password = datos.password;
    });
  }
// evalua el usuario ingresado con el que llega del json
  userIngresed(event: Event) {
    this.useringresado = (<HTMLInputElement>event.target).value;
    // this.estado=!this.estado
    if (this.useringresado == this.user) {
      this.estadouser = true;
    }
  }
  // evalua el password ingresado con el que llega del json
  passwordIngresed(event: Event) {
    this.pass = (<HTMLInputElement>event.target).value;
    if (this.pass == this.password) {
      this.estadopass = true;
    }
  }

  LoginVerify():void {
    // valorestado: boolean=false;
   // constructor (estadologin: EstadologinService){};
  console.log("ingreso a loginVerify ")
    if (this.estadopass && this.estadouser){
      console.log("estadopass "+this.estadopass+";estadouser "+this.estadouser);
      this.estadologin.setEstadologin ( true );
    }
      
    }
}

// class LoginVerify {
//   valorestado: boolean=false;
//   constructor (estadologin: EstadologinService){};

//   if (estadopass == true) && (estadouser==true){
//     estadologin.setEstadologin(estadopass);
//   }
    
//   }

