import { Puesto } from '../form-empleado/Puesto';

export class Empleado {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    puesto: Puesto;
    jefe: Empleado;


    constructor(id: number, nombre: string, apellidoPaterno: string, apellidoMaterno: string, puesto: Puesto, jefe: Empleado) {
      this.id = id;
      this.nombre = nombre;
      this.apellidoPaterno = apellidoPaterno;
      this.apellidoMaterno = apellidoMaterno;
      this.puesto = puesto;
      this.jefe = jefe;
    }
}
