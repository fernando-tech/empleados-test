
export class AltaRequest {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  puesto: string
  jefe: string;


  constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, puesto: string, jefe: string){
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.puesto = puesto;
    this.jefe = jefe;
  }
}
