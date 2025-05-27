import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 constructor( private auth:AuthService,
              private router:Router){}

ngOnInit() {}

 //Metodo salir, destruimos el token, y redireccionamos al login. 
sair(){
this.auth.logout();
this.router.navigateByUrl('/login');}

}
