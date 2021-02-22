import { Component, OnInit } from '@angular/core';
import {ReservasService} from '../../services/reservas.service'
import {LoginService} from '../../services/login.service';
import {global} from '../../services/global'
import { MatDialog } from '@angular/material/dialog';
import { MostrarReservaComponent } from '../mostrar-reserva/mostrar-reserva.component';

@Component({
  selector: 'app-oficinas-reservadas',
  templateUrl: './oficinas-reservadas.component.html',
  styleUrls: ['./oficinas-reservadas.component.css']
})
export class OficinasReservadasComponent implements OnInit {

  public reservas;
  public token;
  public url;
  constructor(
    private _reservas: ReservasService,
    private _login: LoginService,
    public dialog: MatDialog
  ) { 
    this.token = this._login.getToken();
    this.url = global.url;
  }

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas()
  {
    this._reservas.obtenerReservasArrendador(this.token).subscribe(
      res => {
        if(res.status == "success")
        {
          this.reservas = res.reservas;
          console.log(this.reservas);
        }
      }, error => {
        console.log(error);
      }
    )
  }

  mostrarOficina(id)
  {
    const dialogRef = this.dialog.open(MostrarReservaComponent, {
      data: {reserva_id: id}
    });

  }

}
