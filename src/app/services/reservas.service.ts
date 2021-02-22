import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public url:string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
   }

   obtenerReservasUsuario(token): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.get(this.url + 'oficina/reserva/usuario', {headers: headers});
   }

   obtenerReservasArrendador(token): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.get(this.url + 'oficina/reserva/arrendador', {headers: headers});
   }

   obtenerReserva(id): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'oficina/reserva/show/'+ id, {headers: headers});
   }
}
