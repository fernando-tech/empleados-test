import { Component, OnInit } from '@angular/core';
import { PuestosService } from '../../services/puestos.service';
import { ActivatedRoute } from '@angular/router';
import { Puesto } from './Puesto'
import { Empleado } from './../home/Empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestActEmpl } from './RequestActEmpl';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: []
})
export class FormEmpleadoComponent implements OnInit {


  formulario: FormGroup;
  idEmpleado: any;
  idPuesto!: string;
  idJefe!: string;
  empleado?: Empleado;
  puestos: Puesto[] = [];
  gerentes: Empleado[] = [];
  requestActualizar = new RequestActEmpl("","","");


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private puestosService: PuestosService,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService) {

      this.formulario = this.fb.group({
        id: [{ value: '', disabled: true }, Validators.required],
        nombre: [{ value: '', disabled: true }, Validators.required],
        apellidoPaterno: [{ value: '', disabled: true }, Validators.required],
        apellidoMaterno: [{ value: '', disabled: true }, Validators.required],
        puesto: ['', Validators.required],
        jefe: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.idEmpleado = this.route.snapshot.paramMap.get("id");
    this.getEmpleado(this.idEmpleado!);
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

  getEmpleado(id: string):void {
    this.empleadosService.obtenerEmpleadoById(id).subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.empleado = datos;
        this.idPuesto = datos.puesto.idPuesto;
        this.idJefe = datos.jefe.idUsuario;
        this.formulario.get('puesto')?.setValue(this.idPuesto);
        this.formulario.get('jefe')?.setValue(this.idJefe);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  actualizarEmpleado(): void{
    this.requestActualizar.idUsuario = this.idEmpleado;
    this.requestActualizar.idPuesto = this.formulario.value.puesto;
    this.requestActualizar.idJefe = this.formulario.value.jefe;

    this.empleadosService.actualizarEmpelado(this.requestActualizar).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se actualizo correctamente!', 'success');
        this.router.navigate(['/home']);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

}
