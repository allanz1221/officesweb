import { Component, OnInit } from '@angular/core';
import {Cupones} from '../../models/cupones';
import {CuponesService} from '../../services/cupones.service';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.css']
})
export class CuponesComponent implements OnInit {

  public status:string;
  public cupones: Cupones
  public cupon;
  
  constructor(
    private _cupones: CuponesService
  ) { 
    this.cupones = new Cupones("", 0);
  }

  ngOnInit(): void {
    this.getCupones();
  }
  
  onSubmit(Form)
  {
    this._cupones.createCupon(this.cupones).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.cupones = response.cupon;
          this.status == "success";
          console.log(this.cupones);
          this.getCupones();
        } else{
          this.status == "error"
        }
      }, error =>
      {
        console.log(error);
      }
    )
  }

  getCupones()
  {
    this._cupones.getCupones().subscribe(
      response =>{
        if(response.status == "success")
        {
          this.cupon = response.cupones;
          console.log(this.cupon);
        }
      }, error =>{
        console.log(error);
      }
    )
  }
}
