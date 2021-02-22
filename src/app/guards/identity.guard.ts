import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {LoginService} from '../services/login.service'

@Injectable()
export class IdentityGuard implements CanActivate{
    
    constructor(
        private _router: Router,
        private _usuario: LoginService
    )
    {

    }

    canActivate()
    {
        let identity = this._usuario.getIdentity();
        if(identity)
        {
            return true;
        }else{
            this._router.navigate(['/login']);
            return false
        }
    }
}