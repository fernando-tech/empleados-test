import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotPageFoundComponent,
    NosotrosComponent,
  ],
  exports: [
    HomeComponent,
    NotPageFoundComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
