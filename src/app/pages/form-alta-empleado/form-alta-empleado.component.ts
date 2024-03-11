import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { PuestosService } from 'src/app/services/puestos.service';
import { Empleado } from '../home/Empleado';
import { Puesto } from '../form-empleado/Puesto';
import Swal from 'sweetalert2';
import { AltaRequest } from './AltaRequest';

@Component({
  selector: 'app-form-alta-empleado',
  templateUrl: './form-alta-empleado.component.html',
  styleUrls: []
})
export class FormAltaEmpleadoComponent implements OnInit {

  formulario: FormGroup;
  empleado?: Empleado;
  puestos: Puesto[] = [];
  gerentes: Empleado[] = [];
  altaRequest = new AltaRequest("","","","","");

  constructor(private router: Router,
    private fb: FormBuilder,
    private puestosService: PuestosService,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService) {
      this.formulario = this.fb.group({
        nombre: ['', Validators.required],
        apellidoPaterno: ['', Validators.required],
        apellidoMaterno: ['', Validators.required],
        puesto: ['', Validators.required],
        jefe: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.getPuestos();
    this.getGerentes();
  }

  getPuestos(): void {
    this.puestosService.obtenerPuestos().subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.puestos = datos;
        console.log(this.puestos);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  getGerentes():void {
    this.empleadosService.obtenerGerentes().subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.gerentes = datos;
        console.log(this.gerentes);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  altaEmpleado():void {
    this.altaRequest.nombre = this.formulario.value.nombre;
    this.altaRequest.apellidoPaterno = this.formulario.value.apellidoPaterno;
    this.altaRequest.apellidoMaterno = this.formulario.value.apellidoMaterno;
    this.altaRequest.puesto = this.formulario.value.puesto;
    this.altaRequest.jefe = this.formulario.value.jefe;

    console.log(this.formulario.value)
    this.empleadosService.altaEmpelado(this.altaRequest).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se registro correctamente!', 'success');
        this.router.navigate(['/home']);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }



}
