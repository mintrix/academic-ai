// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module'; // 👈 importa tu módulo de páginas
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule, // 👈 importante
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

