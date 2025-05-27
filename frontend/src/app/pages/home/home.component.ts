import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  usuario: UserModel = new UserModel()
  
  horasActual: string = '';
  dataActual:string= '';
  users: UserModel[] = [];
  loading = true;
  error = '';

  constructor( private auth:AuthService ) { }

  ngOnInit() {

   this.actualizarHora();
   this.consultarUsers();

  }
   HoraData(): void {// Obtener hora e data
    const ahora = new Date();
    this.horasActual = ahora.toLocaleTimeString(); // formato local HH:MM:SS
    this.dataActual = ahora.toLocaleDateString(); // formato local D-M-A
  }
  actualizarHora(){ // Sync hora exacta.
  this.HoraData(); 
    setInterval(() => {
      this.HoraData();
    }, 1000); // actualiza cada segundo
   }

   consultarUsers(){ //obtener todos usuarios 
        this.auth.gettodosUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar usuários.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}

