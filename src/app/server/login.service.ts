import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  private API_LOGIN = "http://localhost:9090/usuarios"
  //private API_LOGIN = "http://localhost:3000/usuarios"

  postLogin(usuario:any): Observable<any>{
    return this.http.post(this.API_LOGIN, usuario)
  }

  private API_REGISTRO = "http://localhost:9090/usuarios"
  //private API_REGISTRO = "http://localhost:3000/users"
  postRegistro(usuario:any):Observable<any>{
    return this.http.post(this.API_REGISTRO, usuario)
  }
  private API_USUARIOS = "http://localhost:9090/usuarios"
  //private API_USUARIOS = "http://localhost:3000/users"
  getUsuarios():Observable<any>{
    return this.http.get(this.API_USUARIOS)
  }
}
