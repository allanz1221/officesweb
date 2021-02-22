import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {

  public url:string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
   }

   createOficina(oficina): Observable<any>
   {
    let json = JSON.stringify(oficina);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'oficinas/create', param, {headers: headers});
   }

   obtenerOficina(id):Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'oficina/'+ id, {headers: headers});
   }

   updateOficina(id, oficina): Observable<any>
   {  
    let json = JSON.stringify(oficina);
    let params = 'json='+json;
  
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    
    return this._http.put(this.url + 'oficina/update/' + id, params, {headers: headers});
   }

   aceptarSolicitud(id, oficina, token):Observable<any>
   {
    let json = JSON.stringify(oficina);
    let params = 'json='+json;
  
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);
    
    return this._http.put(this.url + 'oficinas/aceptar-solicitud/' + id, params, {headers: headers});
   }


   ultimaOficina(token): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.get(this.url + 'oficinas/ultima', {headers: headers});
   }

   obtenerOficinasUsuario(token): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.get(this.url + 'oficinas/oficinas-usuario', {headers: headers});
   }

   ObtenerSolicitudes(): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'oficinas/solicitudes', {headers: headers});
   }

   createServicio(servicio): Observable<any>
   {
    let json = JSON.stringify(servicio);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'oficina/servicios', param, {headers: headers});
   }

   createRegla(regla): Observable<any>
   {
    let json = JSON.stringify(regla);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'oficina/reglas', param, {headers: headers});
   }

   createImagenes(imagenes): Observable<any>
   {
    let json = JSON.stringify(imagenes);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'oficina/imagenes', param, {headers: headers});
   }
}
