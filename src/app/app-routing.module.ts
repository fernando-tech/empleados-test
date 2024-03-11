import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { FormEmpleadoComponent } from './pages/form-empleado/form-empleado.component';
import { FormAltaEmpleadoComponent } from './pages/form-alta-empleado/form-alta-empleado.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'formulario/:id', component: FormEmpleadoComponent},
  {path: 'alta', component: FormAltaEmpleadoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotPageFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
