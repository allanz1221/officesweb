import { Component, OnInit, DoCheck } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { LoginService} from '../../services/login.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  public identity;
  public usuario: Usuario;
  public status:string;
  public token;

  constructor(
    private _login: LoginService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.identity = _login.getIdentity();
    this.token = _login.getToken();
    this.usuario = new Usuario(1, 1, "", "", "", "", "", "");
   }

  ngDoCheck()
  {
    this.identity = this._login.getIdentity();
    
  }

  ngOnInit(): void {
    this.identity;
    this.token;
    this.logout();
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

             this._router.navigate(['home']);
 
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

  logout(){
    this._route.params.subscribe(params =>{
      let logout = +params['sure'];

      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        //Redireccionar a inicio
        this._router.navigate(['login']);
        this.reloadPage();
        
      }
    })
}

reloadPage() { 
  window.location.reload(); 
}

}
