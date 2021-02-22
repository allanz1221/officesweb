import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ReservasService} from '../../services/reservas.service'

@Component({
  selector: 'app-mostrar-reserva',
  templateUrl: './mostrar-reserva.component.html',
  styleUrls: ['./mostrar-reserva.component.css']
})
export class MostrarReservaComponent implements OnInit {

  public reserva
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {reserva_id: string},
    private _reservas: ReservasService
  ) { }

  ngOnInit(): void {
    this.obtenerReserva();
  }


  obtenerReserva()
  {
    this._reservas.obtenerReserva(this.data.reserva_id).subscribe(
      res =>
        {
          if(res.status == "success")
          {
            this.reserva = res.reserva;
            console.log(this.reserva);
          }
        }
    )
  }

}
