import { Component, OnInit } from '@angular/core';
import {OficinaService} from '../../services/oficina.service'
import {ReglasService} from '../../services/reglas.service'
import {ServiciosService} from '../../services/servicios.service'
import {oficinaServicios} from '../../models/oficinaServicios'
import {oficinaReglas} from '../../models/oficinaReglas'
import {OficinaImagenes} from '../../models/oficinaImagenes'
import {LoginService} from '../../services/login.service'
import {global} from '../../services/global'
import {Router} from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-oficina-servicios',
  templateUrl: './oficina-servicios.component.html',
  styleUrls: ['./oficina-servicios.component.css']
})
export class OficinaServiciosComponent implements OnInit {

  public token;
  public oficina;
  public url;

  public servicios;
  public serviciosOficina: oficinaServicios;
  public servicio = [];

  myFiles:string [] = [];

  public reglas;
  public reglasOficina: oficinaReglas;

  public imagenesOficina: OficinaImagenes;

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
          hideSelectBtn: false,
          attachPinText: 'Subir',
}
  

  constructor(
    private _oficinas: OficinaService,
    private _reglas: ReglasService,
    private _servicios: ServiciosService,
    private _login: LoginService,
    private _router: Router
  ) {
    
    this.serviciosOficina = new oficinaServicios(0, 0 , "", "");
    this.reglasOficina = new oficinaReglas(0,0,"","");
    this.imagenesOficina = new OficinaImagenes(0, "");
    this.token = this._login.getToken();
    this.url = global.url;
   }

  ngOnInit(): void {
    this.obtenerOficina();
    this.obtenerServicios();
    this.obtenerReglas();
   
  }
  dataReglas = [];
  dataServicios = [];
  dataImagenes = [];
  

  agregarReg(regla: string)
  {
    this.dataReglas.push(regla);
  }

  quitarReg(regla) {
    this.dataReglas = this.dataReglas.filter(r => r !== regla);
  }

  agregarServ(serv: string)
  {
    this.dataServicios.push(serv);
  }

  quitarServ(serv) {
    this.dataServicios = this.dataServicios.filter(s => s !== serv);
  }

  guardar() {
    if(this.dataServicios.length > 0){
    for(let i=0; i<this.dataServicios.length; i++){
    //  console.log(this.dataServicios[i].nombreServicio);
      this.serviciosOficina.id_office = this.oficina.id;
      this.serviciosOficina.id_servicio = this.dataServicios[i].id;
      this.serviciosOficina.nombreServicio = this.dataServicios[i].nombreServicio;
      this.serviciosOficina.nombreicono = this.dataServicios[i].nombreIcono;
      console.log(this.serviciosOficina);

      this._oficinas.createServicio(this.serviciosOficina).subscribe(
        response =>{
          if(response.status == "success")
          {
            this.serviciosOficina = response.oficinaServicio;
          }
        }
      )
    }//fin guardar servicios
  }

    if(this.dataReglas.length > 0)
    {
      for(let i=0; i<this.dataReglas.length; i++)
      {
        this.reglasOficina.id_office = this.oficina.id;
        this.reglasOficina.id_regla = this.dataReglas[i].id;
        this.reglasOficina.nombreRegla = this.dataReglas[i].nombreRegla;
        this.reglasOficina.nombreicono = this.dataReglas[i].nombreIcono
        console.log(this.reglasOficina);

        this._oficinas.createRegla(this.reglasOficina).subscribe(
          response =>{
            if(response.status == "success")
            {
              this.reglasOficina = response.reglaOficina;
              
            }
          }
        )
      }
    }

    if(this.dataImagenes.length > 0)
    {
      for(let i=0; i<this.dataImagenes.length; i++)
      {
        this.imagenesOficina.id_oficina = this.oficina.id;
        this.imagenesOficina.nombre_imagen = this.dataImagenes[i];
        
        this._oficinas.createImagenes(this.imagenesOficina).subscribe(
          response =>
          {
            if(response.status == "success")
            {
              this.imagenesOficina = response.imagenesOficina;
            }
          }
        )
      }
    }


    this._router.navigate(['oficinas-usuario']);
          
          Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'Los servicios de la oficina se han guardado correctamente',
          })
    
  }

 async obtenerOficina()
  {
   await this._oficinas.ultimaOficina(this.token).subscribe(
      response =>{
        if(response.status == 'success'){
          this.oficina = response.oficina;
          console.log(this.oficina);
        }
      }
    )
  }

  obtenerReglas()
  {
    this._reglas.getReglas().subscribe(
      response =>{
        if(response.status == 'success')
        {
          this.reglas = response.reglas;
          console.log(this.reglas);
        }
      }
    )
  }

  obtenerServicios()
  {
    this._servicios.getServicios().subscribe(
      response =>{
        if(response.status == 'success'){
          this.servicios = response.servicio;
          console.log(this.servicios);
        }
      }
    )
  }


  imagenUpload(data){
    
   console.log(data.body.image);

    this.dataImagenes.push(data.body.image);
    console.log(this.dataImagenes);
  
  }


}
