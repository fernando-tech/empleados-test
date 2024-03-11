import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { RequestActEmpl } from '../pages/form-empleado/RequestActEmpl';
import { AltaRequest } from '../pages/form-alta-empleado/AltaRequest';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private URL = 'http://localhost:8080/empleados';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  obtenerEmpleados(): Observable<any> {
    return this.http.get<any>(`${this.URL}`);
  }

  obtenerGerentes(): Observable<any> {
    return this.http.get<any>(`${this.URL}/gerentes`);
  }

  obtenerEmpleadoById(id: string){
    return this.http.get<any>(`${this.URL}/${id}`);
  }

  actualizarEmpelado(request: RequestActEmpl, ){
    return this.http.put<any>(`${this.URL}`, request);
  }

  altaEmpelado(request: AltaRequest, ){
    return this.http.post<any>(`${this.URL}`, request);
  }

}
