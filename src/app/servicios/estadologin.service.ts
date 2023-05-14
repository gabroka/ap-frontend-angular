import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstadologinService {
 private var: boolean = false;

  constructor() {}

  public getEstadologin():boolean {
    console.log("ingreso al metodo getEstadologin. estado de var "+this.var);
    return this.var;
  }

  public setEstadologin( value: boolean): void{
    // console.log("variable var de estadologin "+this.var);
    this.var = value;
    // console.log("variable var de estadologin actualizada"+ this.var);
  }
}
