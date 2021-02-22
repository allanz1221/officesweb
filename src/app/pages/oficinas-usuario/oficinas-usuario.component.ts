import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {OficinaService} from '../../services/oficina.service'
import {LoginService} from '../../services/login.service'


import {global} from '../../services/global'

@Component({
  selector: 'app-oficinas-usuario',
  templateUrl: './oficinas-usuario.component.html',
  styleUrls: ['./oficinas-usuario.component.css']
})
export class OficinasUsuarioComponent implements OnInit {
  public token;
  public status;
  public oficinas;

  public url;

  constructor(
    private _oficinas: OficinaService,
    private _login: LoginService,
    private _router: Router
  ) { 
    this.url = global.url;
    this.token = this._login.getToken();
  }

  ngOnInit(): void {
    this.obtenerOficinasUsuario();
  }

  obtenerOficinasUsuario()
  {
    this._oficinas.obtenerOficinasUsuario(this.token).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficinas = response.oficinas;
          console.log(this.oficinas);

         
          
          
        }
      }
    )
  }

  obtenerImagenOficina()
  {

  }

  mostrarOficina(id: number)
  {
    this._router.navigate(["/mostrar-oficina", id])
  }

  EditarOficina(id: number)
  {
    this._router.navigate(["/update-office", id])
  }

}
