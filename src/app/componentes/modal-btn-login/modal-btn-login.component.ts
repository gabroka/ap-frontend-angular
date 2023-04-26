import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-btn-login',
  templateUrl: './modal-btn-login.component.html',
  styleUrls: ['./modal-btn-login.component.css'],
})
export class ModalBtnLoginComponent implements OnInit {
  user: any;
  estado: Boolean = false;
  pass = '';
  useringresado = '';

  constructor(private log: DatosService) {}

  ngOnInit(): void {
    this.log.getDatos().subscribe(datos => {
      this.user = datos.user;
    });
  }

  useringresed(event: Event) {
    this.useringresado = (<HTMLInputElement>event.target).value;
    if (this.useringresado == this.user.username) {
      this.estado = true;
    }
  }
}
