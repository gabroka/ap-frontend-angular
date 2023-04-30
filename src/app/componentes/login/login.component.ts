import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { EstadologinService } from 'src/app/servicios/estadologin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estado: boolean=false;
  
constructor(private estadologin: EstadologinService){}

ngOnInit(): void {
  console.log("del comp login"+this.estadologin.getEstadologin())
  this.estado=this.estadologin.getEstadologin();
}

}

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