import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from "./register.component";
import { LoginComponent } from "./login.component";
import { LayoutComponent } from "./layout.component";




@NgModule({
  declarations: [LoginComponent, RegisterComponent, LayoutComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
