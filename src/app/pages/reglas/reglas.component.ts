import { Component, OnInit } from '@angular/core';
import {Reglas} from '../../models/reglas';
import {ReglasService} from '../../services/reglas.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styleUrls: ['./reglas.component.css']
})
export class ReglasComponent implements OnInit {

  public reglas: Reglas;
  public status:string;
  public regla;

  constructor(
    private _reglas: ReglasService
  ) {
    this.reglas = new Reglas("", "");
   }

  ngOnInit(): void {
    this.getReglas();
  }

  onSubmit(Form)
  {
    this.reglas.nombreIcono = "prueba";
    this._reglas.createReglas(this.reglas).subscribe(
      response =>{
        if(response.status == 'success'){
          this.reglas = response.regla;
          console.log(this.reglas);
          this.getReglas();

          Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'La regla de a guardado correctamente',
          })
        }else{
          this.status == 'error';
        }
      }, error =>
      {
        console.log(error);
      }
    )
  }

  getReglas()
  {
    this._reglas.getReglas().subscribe(
      response =>{
        if(response.status == 'success')
        {
          this.regla = response.reglas;
          console.log(this.regla);
        }
      }
    )
  }

  eliminarRegla(id: number)
  {
    this._reglas.deleteReglas(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.regla = response.regla;
          this.getReglas();
          console.log(this.regla);
        }
      }
    )
  }



}
