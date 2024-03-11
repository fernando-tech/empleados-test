import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormEmpleadoComponent } from './form-empleado/form-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





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
    FormEmpleadoComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
