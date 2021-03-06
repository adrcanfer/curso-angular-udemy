import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyDlf-KB7PWBZHTrsm1eIC0Q8w_VBo8plQE';
  userToken:string;

  constructor(private http: HttpClient) { 
    this.leerToken();
  }
  
  login(usuario:UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(map(resp => {
      this.guardarToken(resp['idToken']);
      return resp;
    }))
  }

  logOut(){
    localStorage.removeItem('token');
  }

  nuevoUsuario (usuario: UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    
    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(map(resp => {
      this.guardarToken(resp['idToken']);
      return resp;
    }));
  }

  private guardarToken(idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString())
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token')
    } else {
      this.userToken = '';
    }
  }

  estaAutenticado(): boolean{
    let res:boolean = true;
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if(this.userToken.length < 2){
      res = false;
    }

    if(expiraDate < new Date()){
      res = false
    }
    return res;
  }

}
