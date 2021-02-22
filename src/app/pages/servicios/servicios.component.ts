import { Component, OnInit } from '@angular/core';
import {Servicios } from '../../models/servicios'
import {ServiciosService} from '../../services/servicios.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  public servicios: Servicios;
  public status:string;
  public servicio;

  constructor(
    private _servicios: ServiciosService
  ) {
    this.servicios = new Servicios("", "");
   }

  ngOnInit(): void {
    this.getServicios();
  }

  onSubmit(Form)
  {
    this._servicios.createServicios(this.servicios).subscribe(
      response =>{
        if(response.status = 'success')
        {
          this.servicios = response.servicio;
          this.status = 'success';
          console.log(this.servicios);
          this.getServicios();
          Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'El servicio se a guardado correctamente',
          })
        }else{
          this.status = 'error';
        }

      }
    )
  }

  getServicios(){
    this._servicios.getServicios().subscribe(
      response =>{
        if(response.status == 'success'){
           console.log(response);
           this.servicio = response.servicio;
           console.log(this.servicio);
        }else{
          this.status == 'error';
        }
      }, error =>{
        console.log(error);
      }
    )
   }

}
