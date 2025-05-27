// src/app/pages/pages.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConsultaiaComponent } from './consultaia/consultaia.component';
import { DashprincipalComponent } from '../shared/dashprincipal/dashprincipal.component';
import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module'; // 👈 importa shared
import { RegistrosfeedComponent } from './registrosfeed/registrosfeed.component';
import { RegistrousersComponent } from './registrousers/registrousers.component';


@NgModule({
  declarations: [
    RegistroComponent,
    HomeComponent,
    LoginComponent, 
    ConsultaiaComponent, 
    DashprincipalComponent,
    PagesComponent, 
    NopagefoundComponent, 
    RegistrosfeedComponent,
    RegistrousersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SharedModule // 👈 importante para usar navbar, footer, etc.
  ]
})
export class PagesModule { }
