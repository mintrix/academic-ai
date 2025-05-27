import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/usuario.model';
import { map,switchMap, tap, catchError,} from 'rxjs/operators';
import { throwError, Observable  } from 'rxjs';
import { FirebaseAuthResponse } from '../models/firebase-auth-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //Cadastro base de dato Sqlite
  private urlbackend = environment.urlbackend;

  //Autentication Firebase
  private url   = environment.urlapilogin;
  private apiKey= environment.ApiKey

  userToken: string ='';
  

  constructor( private http: HttpClient) {
    this.leerToken();
   }

  //Metodo logout
  logout(){
  localStorage.removeItem('token');
  }
  //Metodo para realizar el login usuario en firebase, con el pipe filtramos y guardamos el token local.
  login( usuario:UserModel ){
    const autData ={
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
   };
   return this.http.post<FirebaseAuthResponse>(
    `${ this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
    autData
   ).pipe(
     map( resp =>{
      this.guardarToken(resp.idToken);
      return resp;
     })
   );
  }
  
  //Metodo para registrar usuario en firebase, con el pipe filtramos y guardamos el token local. 
  registrarUsuarios(usuario: UserModel) {
  const autData = {
    email: usuario.email,
    password: usuario.password,
    returnSecureToken: true
  };

  return this.http.post<FirebaseAuthResponse>(
    `${this.url}/accounts:signUp?key=${this.apiKey}`,
    autData
  ).pipe(
    switchMap(resp => {
      this.guardarToken(resp.idToken);
      // Si el registro en Firebase fue exitoso, ahora registrar en tu API Flask
      const flaskUserData = {
        email: usuario.email,
        password: usuario.password,  // sin hashear, se hace en el backend
        nome: usuario.nome,
        rol: usuario.rol,
        data_creacao: new Date().toISOString().slice(0, 10) // formato YYYY-MM-DD
      };

      return this.http.post(`${this.urlbackend}api/users`, flaskUserData);
    }),
    tap(() => console.log('Usuario registrado en Firebase y en Flask')),
    catchError(err => {
      console.error('Error durante el registro:', err);
      return throwError(() => err);
    })
  );
}

  private guardarToken(idToken :string){ //Metodo para guardar el tokenLocal: 

  this.userToken = idToken;
  localStorage.setItem('token', idToken);

 
  let hoje =new Date(); //Comprobacion validacion Token
  hoje.setSeconds( 3600 );
  localStorage.setItem('expira', hoje.getTime().toString());

  }

  //Leer tokenLocal: 
  leerToken(){
  this.userToken = localStorage.getItem('token') ??'';
   return this.userToken;
  }

  estaAutenticado():boolean{   //Comprobar si el usuario esta autenticado y validamos la caducidad del token. 
     
    if( this.userToken.length <2 ){
      return false
     }

     const expira = Number(localStorage.getItem('expira'));
     const expiraData = new Date();
     expiraData.setTime(expira);

    if(expiraData > new Date()){
      return true;
    }else {
      return false;
    }
  }
  
  gettodosUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.urlbackend}api/users`);
  }

}
