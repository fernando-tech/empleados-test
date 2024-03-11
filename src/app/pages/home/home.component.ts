import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from './Empleado';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadosService: EmpleadosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadosService.obtenerEmpleados().subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.empleados = datos;
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  eliminarEmpleado(idEmpleado: number){
    Swal.fire({
      title: '¿Esta seguro?',
      text: "El empleado sera eliminado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.empleadosService.eliminarEmpleado(idEmpleado).subscribe(
          (datos) => {
            Swal.fire('Correcto', '¡Se elimino correctamente!', 'success').then(() => {
              // Recargar la página después de hacer clic en "Aceptar" en la alerta
              location.reload();
            });
          });
      }
    })

  }

}
