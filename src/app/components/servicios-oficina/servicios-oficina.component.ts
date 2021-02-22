import { Component, OnInit } from '@angular/core';
import {ReglasService} from '../../services/reglas.service'
import {ServiciosService} from '../../services/servicios.service'
import {Router, ActivatedRoute, Params} from '@angular/router';
import {oficinaReglas} from '../../models/oficinaReglas'

import {oficinaServicios} from '../../models/oficinaServicios'


import {OficinaService} from '../../services/oficina.service'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-servicios-oficina',
  templateUrl: './servicios-oficina.component.html',
  styleUrls: ['./servicios-oficina.component.css']
})
export class ServiciosOficinaComponent implements OnInit {

  public reglasOficina;
  public serviciosOficina;
  public status;

  public servicios;
  public reglas;

  public nuevoServicio: oficinaServicios;
  public nuevoRegla: oficinaReglas

  public existe = 0;

  public servicio;
  public regla;

  constructor(
    private _reglas: ReglasService,
    private _servicios: ServiciosService,
    private _oficinas: OficinaService,
    private _route: ActivatedRoute
  ) { 
    this.nuevoServicio = new oficinaServicios(1, 1, "", "");
    this.nuevoRegla = new oficinaReglas(1, 1, "", "");
  }

  ngOnInit(): void {
    this.ReglasOficina();
    this.obtenerReglas();
    
    this.ServiciosOficina();
    this.obtenerServicios();
  }


  //SERVICIOS

async  crearServicio(Form)
  {
    console.log(this.nuevoServicio);
  await  this._servicios.getServicio(this.nuevoServicio.id_servicio).subscribe(
      response =>
      {
        if(response.status == "success")
        {
          let id = this._route.snapshot.paramMap.get('id');

          this.servicio = response.servicio;
          console.log(this.servicio);

          this.nuevoServicio.nombreServicio = this.servicio.nombreServicio;
          this.nuevoServicio.nombreicono = this.servicio.nombreIcono;
          this.nuevoServicio.id_office = parseInt(id);
          this.nuevoServicio.id_servicio = this.servicio.id;
          
          //COMPROBAR SI EXISTE EL REGISTRO
          for(let i=0; i<this.serviciosOficina.length; i++)
          {
           
            if(this.nuevoServicio.id_servicio === this.serviciosOficina[i].id_servicio)
            {
              this.existe = this.existe + 1;
              
            }
          }
          
          //INGRESAR
          if(this.existe != 0)
          {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'El servicio ya existe',
            })
            this.existe = 0;
          }else{
            this._oficinas.createServicio(this.nuevoServicio).subscribe(
              response =>
              {
                if(response.status == "success")
                {
                  
                  this.ServiciosOficina();
                  this.nuevoServicio = response.oficinaServicio
                  console.log(this.nuevoServicio);
                  Swal.fire({
                    icon: 'success',
                    title: 'Guardado',
                    text: 'El servicio se a guardado correctamente',
                  })

                 
                }
              }, error =>
              {
                console.log(error);
              }
            )
          }
         
        }
      }
    )
    
  }

 async obtenerServicios()
  {
   await this._servicios.getServicios().subscribe(
      response =>
      {
        if(response.status == "success")
        {
          this.servicios = response.servicio;
          console.log(this.servicios)
        }
      }
    )
  }

 async ServiciosOficina()
  {
    let id = this._route.snapshot.paramMap.get('id');

   await this._servicios.getServiciosOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.serviciosOficina = response.servicios;
          this.status == "success"
          console.log(this.serviciosOficina);
          
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

  //FIN SERVICIOS


  //REGLAS

 async crearRegla(Form)
  {
    console.log(this.nuevoRegla);
  await  this._reglas.getRegla(this.nuevoRegla.id_regla).subscribe(
      response =>
      {
        if(response.status == "success")
        {
          let id = this._route.snapshot.paramMap.get('id');

          this.regla = response.regla;
          console.log(this.regla);

          this.nuevoRegla.nombreRegla = this.regla.nombreRegla;
          this.nuevoRegla.nombreicono = this.regla.nombreIcono;
          this.nuevoRegla.id_office = parseInt(id);
          this.nuevoRegla.id_regla = this.regla.id;
          
          //COMPROBAR SI EXISTE EL REGISTRO
          for(let i=0; i<this.reglasOficina.length; i++)
          {
           
            if(this.nuevoRegla.id_regla === this.reglasOficina[i].id_regla)
            {
              this.existe = this.existe + 1;
            }
          }     
          //INGRESAR
          if(this.existe != 0)
          {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'La regla ya existe',
            })
            this.existe = 0;
          }else{
            this._oficinas.createRegla(this.nuevoRegla).subscribe(
              response =>
              {
                if(response.status == "success")
                {
                  
                  this.ReglasOficina();
                  this.nuevoRegla = response.reglaOficina
                  console.log(this.nuevoRegla);
                  Swal.fire({
                    icon: 'success',
                    title: 'Guardado',
                    text: 'La regla se a guardado correctamente',
                  })

                 
                }
              }, error =>
              {
                console.log(error);
              }
            )
          }
         
        }
      }
    )
  }
async  ReglasOficina()
  {    
    let id = this._route.snapshot.paramMap.get('id');
  
   await this._reglas.getReglasOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.reglasOficina = response.reglas;
          this.status == "success"
          console.log(this.reglasOficina);

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



  eliminarRegla(id: number)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Eliminar regla de oficina',
      text: "¿Estas seguro que quieres eliminar esta regla?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._reglas.deleteReglasOficina(id).subscribe(
          response =>
          {
            if(response.status == "success")
            {
              this.ReglasOficina();
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
          'A cancelado la eliminacion de la regla',
          'error'
        )
      }
    })
  }

async  obtenerReglas()
  {
   await this._reglas.getReglas().subscribe(
      response =>
      {
        if(response.status == "success")
        {
          this.reglas = response.reglas;
          console.log(this.reglas);
        }
      }
    )
  }

  eliminarServicio(id: number)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Eliminar servicio de oficina',
      text: "¿Estas seguro que quieres eliminar este servicio?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._servicios.deleteServicioOficina(id).subscribe(
          response =>
          {
            if(response.status == "success")
            {
              this.ServiciosOficina();
              this.status == "success";
              console.log(this.status);
            }
          }
        )
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'A cancelado la eliminacion del servicio',
          'error'
        )
      }
    })


  }

}
