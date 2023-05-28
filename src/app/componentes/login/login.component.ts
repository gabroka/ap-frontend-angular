import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/models/loginusuario.model';
import { AuthService } from 'src/app/servicios/auth.service';
// import { DatosService } from 'src/app/servicios/datos.service';
import { EstadologinService } from 'src/app/servicios/estadologin.service';
import { TokenService } from 'src/app/servicios/token.service';
// import { ModalBtnLoginComponent } from '../modal-btn-login/modal-btn-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


constructor(private tokenService:TokenService, private authService:AuthService){}

ngOnInit(): void {
  

}



}
  /* estado: boolean = false; */
  // @ViewChild(ModalBtnLoginComponent) modalbtnlogin: ModalBtnLoginComponent;

  /* constructor(private estadologin: EstadologinService) {} */

  /* ngOnInit(): void {
   // console.log('del comp login' + this.estadologin.getEstadologin());
    this.estado = this.estadologin.getEstadologin();
  } */
  // onLoginClicked(): void {
  //   // Llame al método ngAfterViewInit del componente LoginComponent
  //   console.log('se ejecuta el afterview');
  //   this.estado = this.estadologin.getEstadologin();;
  // }
//}

//   ngOnInit(): void  {
//     this.usuario.getDatos().subscribe(usuario =>{
//       this.user = usuario.user;
//       this.password = usuario.redes;
//       this.nombre=usuario.nombre;
//       console.log(this.user)
//       console.log(this.password)

//     })
//   }
// }
