import { Component, OnInit } from '@angular/core';
import {OficinaService} from '../../services/oficina.service'
import {Router, ActivatedRoute} from '@angular/router';
import {global} from '../../services/global'
import {Oficinas} from '../../models/oficinas';
import {LoginService} from '../../services/login.service'
import Swal from 'sweetalert2'

declare var mapboxgl:any;
@Component({
  selector: 'app-mostrar-solicitud',
  templateUrl: './mostrar-solicitud.component.html',
  styleUrls: ['./mostrar-solicitud.component.css']
})
export class MostrarSolicitudComponent implements OnInit {

  public oficinaEdit: Oficinas;
  public oficina;
  public status;
  public url;
  public identity;
  public token;

  constructor(
    private _oficina: OficinaService,
    private _route: ActivatedRoute,
    private _login: LoginService
  ) { 
    this.identity = this._login.getIdentity();
    this.token = this._login.getToken();
    this.url = global.url;
    this.oficinaEdit = new Oficinas(1,this.identity.sub, "", "", "", "", "", "", "", 0 , 0,  0, 0, 0)
  }

  ngOnInit(): void {
    this.obtenerOficina();
  }

  obtenerOficina()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._oficina.obtenerOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficina = response.oficina;
          this.status == "success"
          console.log(this.oficina);

          mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzand1NDE5Y20ycXB1am9mbjFuOTgifQ.RHArcX_yJnsWGVjYawixxg';
          const map3 = new mapboxgl.Map({
          container: 'map3',
          center: [ this.oficina.long_ubicacion, this.oficina.lat_ubicacion],
          zoom: 18,
          style: 'mapbox://styles/mapbox/streets-v11'
          });
        
          var marker = new mapboxgl.Marker({
            draggable: false
            })
            .setLngLat([ this.oficina.long_ubicacion, this.oficina.lat_ubicacion])
            .addTo(map3);

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

  EditarOficina()
  {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de aceptar esta oficina?',
      text: "Al aceptar esta oficina estara disponible para rentarse en la APP",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Aceptar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        console.log(this.oficinaEdit);
        let id = this._route.snapshot.paramMap.get('id');
        this._oficina.aceptarSolicitud(id, this.oficinaEdit, this.token).subscribe(
          response =>{
            if(response.status == "success")
            {
              this.oficinaEdit = response.changes;
              console.log(this.oficinaEdit);
            }
          }, error =>
          {
            console.log(error);
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'A cancelado aceptar esta oficina',
          'error'
        )
      }
    })

  
  }

}
