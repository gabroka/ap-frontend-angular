import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../models/nuevousuario.model';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/loginusuario.model';
import { JwtDto } from '../models/jwtdto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL ='http://localhost:8080/auth'
  constructor(private http:HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post<any>(this.authURL+'/nuevo', nuevoUsuario)
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.http.post<JwtDto>('http://localhost:8080/auth/login', loginUsuario);
  }
}
