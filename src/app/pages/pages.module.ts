import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormEmpleadoComponent } from './form-empleado/form-empleado.component';




@NgModule({
  declarations: [
    HomeComponent,
    NotPageFoundComponent,
    NosotrosComponent,
    FormEmpleadoComponent
  ],
  exports: [
    HomeComponent,
    NotPageFoundComponent,
    NosotrosComponent,
    FormEmpleadoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
