import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [ContactComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
