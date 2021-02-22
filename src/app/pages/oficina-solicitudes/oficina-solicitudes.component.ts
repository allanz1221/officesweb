import { Component, OnInit } from '@angular/core';
import {OficinaService} from '../../services/oficina.service'
import {global} from '../../services/global'
import {Router } from '@angular/router';

@Component({
  selector: 'app-oficina-solicitudes',
  templateUrl: './oficina-solicitudes.component.html',
  styleUrls: ['./oficina-solicitudes.component.css']
})
export class OficinaSolicitudesComponent implements OnInit {

  public oficinas;
  public url;

  constructor(
    private _oficinas: OficinaService,
    private _router: Router
  ) { 
    this.url = global.url
  }

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes()
  {
    this._oficinas.ObtenerSolicitudes().subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficinas = response.oficinas;
          console.log(this.oficinas);
        }
      }
    )
  }

  mostrarSolicitud(id: number){
    this._router.navigate(["/mostrar-solicitud", id])
  }

}
