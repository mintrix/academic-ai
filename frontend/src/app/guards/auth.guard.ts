import { CanActivate, Router } from '@angular/router';
import { Injectable} from '@angular/core';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate{

constructor(private auth:AuthService,
            private router:Router){}

  canActivate():  boolean {

    if( this.auth.estaAutenticado() ){
    console.log('LOGUEADO');
    return true;
    }else{
      this.router.navigateByUrl('/login');
      console.log('NO LOGUEADO')
    return false;
    }
    
  }
}
