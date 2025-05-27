import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import {NopagefoundComponent} from './pages/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [  
   { path: 'registro', component: RegistroComponent },
   { path: 'login'   , component: LoginComponent },
   { path: '', redirectTo:'/home', pathMatch:'full' },
   { path: '**',component:NopagefoundComponent }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
