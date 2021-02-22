import { Component, OnInit } from '@angular/core';
import {ReservasService} from '../../services/reservas.service';
import {LoginService} from '../../services/login.service'
import {global} from '../../services/global'

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  public token;
  public reservas;
  public url;

  constructor(
    private _reservas: ReservasService,
    private _login: LoginService
  ) { 
    this.token = this._login.getToken();
    this.url = global.url;
  }

  ngOnInit(): void {
    this.reservasUsuario();
  }

  reservasUsuario()
  {
    this._reservas.obtenerReservasUsuario(this.token).subscribe(
      response =>
      {
        if(response.status == "success")
        {
          this.reservas = response.reservas;
          console.log(this.reservas);
        }
      }, error =>{
        console.log(error);
      }
    )
  }

}
