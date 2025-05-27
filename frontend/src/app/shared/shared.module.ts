// src/app/shared/shared.module.ts
import { NgModule } from "@angular/core"; 
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {}





