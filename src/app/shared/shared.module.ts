import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, FooterComponent } from './components';
import { AuthRoutingModule } from "../auth/auth-routing.module";


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class SharedModule { }
