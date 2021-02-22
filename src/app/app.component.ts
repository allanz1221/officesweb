import { Component, OnInit, DoCheck } from '@angular/core';
import {Usuario} from '../app/models/usuario';
import { LoginService} from '../app/services/login.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit, DoCheck {
  title = 'officesWeb';

 public identity;
 public usuario: Usuario;
 public status:string;
 public token;

 constructor(
   private _login: LoginService
 )
 {
  this.identity = _login.getIdentity();
  this.token = _login.getToken();

  this.usuario = new Usuario(1, 1, "", "", "", "", "", "");
 }

 ngDoCheck(){
  this.identity = this._login.getIdentity();
  this.token = this._login.getToken();
 }

 ngOnInit(){
   
 }

 onSubmit(Form)
 {
  this._login.signup(this.usuario).subscribe(
    response => {
      //TOKEN
      if(response.status != 'error')
      {
        this.status = 'success';
        this.token = response;

        //USUARIO IDENTIFICADO
        this._login.signup(this.usuario, true).subscribe(
          response =>{
            this.identity = response;

            console.log(this.token);
            console.log(this.identity);

            //PERSISTIR DATOS DEL USUARIO
            localStorage.setItem('token', this.token);
            localStorage.setItem('identity', JSON.stringify(this.identity));

          },
          error =>{
            this.status = 'error'
            console.log(<any> error);
          }
        );
      }else{
        this.status = 'error';
        console.log('error');
      }
    }, error => {
      this.status = 'error'
      console.log(<any> error);
    }
  )
 }
}
