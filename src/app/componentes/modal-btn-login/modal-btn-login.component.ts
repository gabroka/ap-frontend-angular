import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EstadologinService } from 'src/app/servicios/estadologin.service';
import { LoginComponent } from '../login/login.component';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUsuario } from 'src/app/models/loginusuario.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-btn-login',
  templateUrl: './modal-btn-login.component.html',
  styleUrls: ['./modal-btn-login.component.css'],
})

// la clase con el implements OnInit hace que se ejecute junto al inicio del modulo
export class ModalBtnLoginComponent implements OnInit {
  isLoged = false;
  isLogedFail = false;
  loginUsuario!:LoginUsuario;
  nombreUsuario!:string;
  password!:string;
  roles:string[]=[];
  errMsj!:string;
  //form: FormGroup;
 //event: any;
  //authService: any;
  //tokenService: any;
  //  @ViewChild(LoginComponent) loginComponent: LoginComponent;

  // user toma el nombre de usuario que llega desde el json via el servicio DatosService
  // user: any;
  // estadouser evalua si es usuario es el correcto
  // estadouser: Boolean = false;
  // estadopass evalua si la password es el correcto
  // estadopass: Boolean = false;
  // pass toma la contraseña ingresada por el usuario
  // pass = '';
  // useringresado toma el usuario ingresado por el usuario
  // useringresado = '';
  // password toma la contraseña que llega desde el json via el servicio DatosService
  // password: string = '';
  constructor(private formBuilder: FormBuilder, private tokenService:TokenService, private authService:AuthService) {
    /* this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    }); */
  }
  
 

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLoged = true;
      this.isLogedFail = false;
      this.roles=this.tokenService.getAuthorities(); 
    }
  }
  //console.log("del modal"+this.form.getValue('email'));
  /* get Password() {
    return this.form.get('password');
  } */

  /* get Mail() {
    console.log("metodo get Mail ", this.form.get('email'));
    return this.form.get('email');
  } */

  /* get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  } */

  /* get MailValid() {
    return false;
  } */

  

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    /* if (this.form.valid) { */
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra

      //this.nombreUsuario=this.Mail;
      console.log("valor de nombreUsuario ",this.nombreUsuario ,"+",this.password);
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
  
    this.authService.login(this.loginUsuario).subscribe(data=>{
      this.isLoged=true;
      this.isLogedFail=false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles=data.authorities;
    }, err =>{
     this.isLoged=false;
     this.errMsj=err.error.mensaje;
     console.log(this.errMsj);
    } )
      
    /*   alert('Todo salio bien ¡Enviar formuario!');
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      //this.form.markAllAsTouched();
      alert("error de ingreso");
    } */
  }

  /* onlogin():void{
     this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
     this.authService.login(this.loginUsuario).subscribe(data=>{
      this.isLoged=true;
      this.isLogedFail=false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles=data.authorities;
    }, err =>{
     this.isLoged=false;
     this.errMsj=err.error.mensaje;
     console.log(this.errMsj);
    } )
 
 } */
}

// constructor(private log: DatosService, private estadologin: EstadologinService) {}
// ngAfterViewInit(): void {
//   this.LoginComponent.ngOnInit();
// }

// ngOnInit(): void {// trae los datos del json
//   this.log.getDatos().subscribe((datos) => {
//     this.user = datos.username;
//     this.password = datos.password;
//   });
// this.loginComponent.ngOnInit();

// evalua el usuario ingresado con el que llega del json
// userIngresed(event: Event) {
//   this.useringresado = (<HTMLInputElement>event.target).value;
//   // this.estado=!this.estado
//   if (this.useringresado == this.user) {
//     this.estadouser = true;
//   }
// }
// // evalua el password ingresado con el que llega del json
// passwordIngresed(event: Event) {
//   this.pass = (<HTMLInputElement>event.target).value;
//   if (this.pass == this.password) {
//     this.estadopass = true;
//   }
// }

//   LoginVerify():void {
//     // valorestado: boolean=false;
//    // constructor (estadologin: EstadologinService){};
//   console.log("ingreso a loginVerify ")
//     if (this.estadopass && this.estadouser){
//       console.log("estadopass "+this.estadopass+";estadouser "+this.estadouser);
//       this.estadologin.setEstadologin ( true );
//       // this.logincomponent.ngOnInit();
//     }

//   }
// }

// class LoginVerify {
//   valorestado: boolean=false;
//   constructor (estadologin: EstadologinService){};

//   if (estadopass == true) && (estadouser==true){
//     estadologin.setEstadologin(estadopass);
//   }

//   }
