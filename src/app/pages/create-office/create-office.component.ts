import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Oficinas} from '../../models/oficinas';
import {OficinaService} from '../../services/oficina.service';
import {LoginService} from '../../services/login.service'
import {UbicacionService} from '../../services/ubicacion.service';

import Swal from 'sweetalert2'

declare var mapboxgl:any;


interface TipoOficina {
  value: string;
  viewValue: string;
}

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent implements OnInit, AfterViewInit {

public oficina: Oficinas;
public status: string;

public paises;
public estados;
public ciudades

public identity;


tipos: TipoOficina[] = [
  {value: 'Ejecutiva', viewValue: 'Ejecutiva'},
  {value: 'Compartida', viewValue: 'Compartida'},
];

tiposStatus: Status[] = [
  {value: '1', viewValue: 'Aceptada'},
  {value: '0', viewValue: 'No acepatada'},
];

  constructor(
    private _oficinas: OficinaService,
    private _login: LoginService,
    private _router: Router,
    private _ubicacion: UbicacionService
  ) { 
    this.identity = this._login.getIdentity();
    console.log(this.identity);
    this.oficina = new Oficinas(1,this.identity.sub, "", "", "", "", "", "", "", 0 , 0,  0, 0, 0);
    
  }

  ngOnInit(): void {  
    this.obtenerDatosUbicacion();     
  }

  onSubmit(Form)
  {
    console.log(this.oficina);
    var longitud = (<HTMLInputElement>document.getElementById('long_ubicacion')).value;
    var latitud = (<HTMLInputElement>document.getElementById('lat_ubicacion')).value;
    this.oficina.long_ubicacion = longitud;
    this.oficina.lat_ubicacion = latitud;

    if(this.identity.role == 1)
    {
      this.oficina.status = 0;
    }

    this._oficinas.createOficina(this.oficina).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficina = response.oficina;
          this.status == "success";
          this._router.navigate(['oficina-servicios']);
          console.log(this.oficina);
          Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'Los datos de la oficina se han guardado correctamente',
          })
        }else{
          this.status == "error";
        }
      }, error => {
        console.log(error);
      }
    )
  }

  ngAfterViewInit(){
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzand1NDE5Y20ycXB1am9mbjFuOTgifQ.RHArcX_yJnsWGVjYawixxg';
    const map = new mapboxgl.Map({
    container: 'map',
    center: [ -110.961, 29.0892],
    zoom: 10,
    style: 'mapbox://styles/mapbox/streets-v11'
    });

    var marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([-110.961, 29.0892])
      .addTo(map);

      function onDragEnd() {
        var lngLat = marker.getLngLat();
        (<HTMLInputElement>document.getElementById('long_ubicacion')).value= lngLat.lng;
        (<HTMLInputElement>document.getElementById('lat_ubicacion')).value= lngLat.lat;
      
        console.log(lngLat.lng);
        console.log(lngLat.lat);
       
        }
         
        marker.on('dragend', onDragEnd);
  }

  obtenerDatosUbicacion()
  {
    this._ubicacion.obtenerDatos().subscribe(
      response =>
      {
        if(response.status == "success")
        {
          this.paises = response.paises;
          this.estados = response.estados;
          this.ciudades = response.ciudades;
    
        }
      }, error =>{
        console.log(error);
      }
    )
  }

}
