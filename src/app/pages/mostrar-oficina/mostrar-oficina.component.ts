import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {OficinaService} from '../../services/oficina.service'
import {ReglasService} from '../../services/reglas.service'
import {ServiciosService} from '../../services/servicios.service'
import {ImagenesService} from '../../services/imagenes.service'
import {global} from '../../services/global'

declare var mapboxgl:any;

@Component({
  selector: 'app-mostrar-oficina',
  templateUrl: './mostrar-oficina.component.html',
  styleUrls: ['./mostrar-oficina.component.css']
})
export class MostrarOficinaComponent implements OnInit {
  public oficina;
  public reglas;
  public servicios;
  public imagenes;
  public url;
  public status;


  constructor(
    private _oficinas: OficinaService,
    private _reglas: ReglasService,
    private _servicios: ServiciosService,
    private _imagenes: ImagenesService,
    private _route: ActivatedRoute
  ) {
    this.url = global.url;
   }

  ngOnInit(): void {
    this.obtenerOficina();
 
   
  }

  obtenerOficina()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._oficinas.obtenerOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficina = response.oficina;
          this.status == "success"
          console.log(this.oficina);

          mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzand1NDE5Y20ycXB1am9mbjFuOTgifQ.RHArcX_yJnsWGVjYawixxg';
          const map2 = new mapboxgl.Map({
          container: 'map2',
          center: [ this.oficina.long_ubicacion, this.oficina.lat_ubicacion],
          zoom: 18,
          style: 'mapbox://styles/mapbox/streets-v11'
          });
        
          var marker = new mapboxgl.Marker({
            draggable: false
            })
            .setLngLat([ this.oficina.long_ubicacion, this.oficina.lat_ubicacion])
            .addTo(map2);

        }
        else{
          this.status == "error"
        }
      },error =>
      {
        console.log(error);
      }
    )
  }

  ReglasOficina()
  {
    
    let id = this._route.snapshot.paramMap.get('id');

    this._reglas.getReglasOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.reglas = response.reglas;
          this.status == "success"
          console.log(this.reglas);

        }
        else{
          this.status == "error"
        }
      },error =>
      {
        console.log(error);
      }
    )
  }

  ServiciosOficina()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._servicios.getServiciosOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.servicios = response.servicios;
          this.status == "success"
          console.log(this.servicios);
        }
        else{
          this.status == "error"
        }
      },error =>
      {
        console.log(error);
      }
    )
  }

  obtenerImagenes()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._imagenes.getImagenesOficina(id).subscribe(
      response =>
      {
        if(response.status == "success")
        {
          this.imagenes = response.imagenes;
          console.log(this.imagenes);
        }
      }
    )
  }



  }




