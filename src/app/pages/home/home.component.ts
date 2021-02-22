import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../services/login.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identity;
  constructor(
    private _login: LoginService
  ) { 
    this.identity = _login.getIdentity();
  }

  ngOnInit(): void {
  }

}
