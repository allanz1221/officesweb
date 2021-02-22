import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Oficinas } from '../../models/oficinas';
import {OficinaService} from '../../services/oficina.service'
import {LoginService} from '../../services/login.service'
import {UbicacionService} from '../../services/ubicacion.service'

import {Router, ActivatedRoute, Params} from '@angular/router';
import { ServiciosOficinaComponent } from 'src/app/components/servicios-oficina/servicios-oficina.component';

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
  selector: 'app-update-office',
  templateUrl: './update-office.component.html',
  styleUrls: ['./update-office.component.css']
})
export class UpdateOfficeComponent implements OnInit, AfterViewInit {

  public identity;
  public reglas;
  public servicios;
  public status: string;
  public oficina: Oficinas;
  public update;

  public paises;
  public estados;
  public ciudades;

 @ViewChild('long_ubicacion', {static: true}) long_ubicacion: ElementRef;
 @ViewChild(ServiciosOficinaComponent, {static: false}) Servicios: ServiciosOficinaComponent;
  

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
    private _route: ActivatedRoute,
    private _ubicacion: UbicacionService
  ) {
    this.identity = this._login.getIdentity();
    this.oficina = new Oficinas(1,this.identity.sub, "", "", "", "", "", "", "", 0 , 0,  0, 0, 0);
   }

  ngOnInit(): void {
    this.obtenerOficina();
    this.obtenerDatosUbicacion();
    
  }

  obtenerOficina()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._oficinas.obtenerOficina(id).subscribe(
      response =>
      {
        if(response.status == "success")
        {
          this.oficina = response.oficina;
          console.log(this.oficina);
          
         
        }
      }, error =>{
        console.log(error);
      }
    )
  }


  onSubmit(Form)
  {
    var longitud = (<HTMLInputElement>document.getElementById('long_ubicacion')).value;
    var latitud = (<HTMLInputElement>document.getElementById('lat_ubicacion')).value;
    this.oficina.long_ubicacion = longitud;
    this.oficina.lat_ubicacion = latitud;
    
    this._oficinas.updateOficina(this.oficina.id, this.oficina).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.update = response.changes;
          console.log(this.oficina);

          Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'Los datos de la oficina se han actualizado correctamente',
          })
        }
      }, error =>{
        console.log(error);
      }
    )
   
  }



  ngAfterViewInit()
  {
    var longitud = (<HTMLInputElement>document.getElementById('long_ubicacion')).value;
    var latitud = (<HTMLInputElement>document.getElementById('lat_ubicacion')).value;
  
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzand1NDE5Y20ycXB1am9mbjFuOTgifQ.RHArcX_yJnsWGVjYawixxg';
    const map = new mapboxgl.Map({
    container: 'map',
    center: [ -99.1269, 19.4978],
    zoom: 7,
    style: 'mapbox://styles/mapbox/streets-v11'
    });

    var marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([-99.1269, 19.4978])
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
