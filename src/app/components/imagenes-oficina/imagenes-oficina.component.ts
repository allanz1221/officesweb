import { Component, OnInit } from '@angular/core';
import {global} from '../../services/global';
import {LoginService} from '../../services/login.service'
import {ImagenesService} from '../../services/imagenes.service'
import {OficinaService} from '../../services/oficina.service'
import {Router, ActivatedRoute, Params} from '@angular/router';

import {OficinaImagenes} from '../../models/oficinaImagenes'


import Swal from 'sweetalert2'
import { oficinaServicios } from 'src/app/models/oficinaServicios';

@Component({
  selector: 'app-imagenes-oficina',
  templateUrl: './imagenes-oficina.component.html',
  styleUrls: ['./imagenes-oficina.component.css']
})
export class ImagenesOficinaComponent implements OnInit {

  public url;
  public imagenes;
  public status;
  public imagenOficina: OficinaImagenes

  public afuConfig = {
    multiple: true,
    formatsAllowed: ".jpg,.png, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:global.url+'oficina/upload',
      headers: {
     
     "Authorization" : this._login.getToken()
      }
    },
    theme: 'attachPin',
          hideProgressBar: false,
          hideResetBtn: true,
          hideSelectBtn: true,
          attachPinText: 'Subir',
}

  constructor(
    private _login: LoginService,
    private _imagen: ImagenesService,
    private _oficina: OficinaService,
    private _route: ActivatedRoute
  ) {
    this.url = global.url;
    this.imagenOficina = new OficinaImagenes(0, "");
   }

  ngOnInit(): void {
    this.obtenerImagenesOficina();
  }

  GuardarImagen(data)
  {
    let id = this._route.snapshot.paramMap.get('id');

    this.imagenOficina.id_oficina = Number(id);
    this.imagenOficina.nombre_imagen = data.body.image;

    this._oficina.createImagenes(this.imagenOficina).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.imagenOficina = response.imagenesOficina;
          console.log(this.imagenOficina);
          this.obtenerImagenesOficina();
        }
      }
    )
  }

  obtenerImagenesOficina()
  { 
    let id = this._route.snapshot.paramMap.get('id');
    this._imagen.getImagenesOficina(id).subscribe(
      response => {
        if(response.status == "success")
        {
          this.imagenes = response.imagenes;
          console.log(this.imagenes);
        }
      }
    )
  }

  eliminarImagen(id: number)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Eliminar imagen de oficina',
      text: "¿Estas seguro que quieres eliminar esta imagen?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._imagen.deleteImagenOficina(id).subscribe(
          response =>
          {
            if(response.status == "success")
            {
              this.obtenerImagenesOficina();
              this.status == "success";
            }
          }
        )
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'A cancelado la eliminacion de la imagen',
          'error'
        )
      }
    })
  }

}
