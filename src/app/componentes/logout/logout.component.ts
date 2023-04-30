import { Component, OnInit } from '@angular/core';
import { EstadologinService } from 'src/app/servicios/estadologin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
estado: boolean = false;
  constructor(private estadologin: EstadologinService){
}

ngOnInit(): void {
  this.estado=this.estadologin.getEstadologin();
}

desloguear(){
  this.estadologin.setEstadologin(false);
}
}