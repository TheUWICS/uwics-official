import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {
  }

  canActivate(): boolean {
    // if (!this.auth.getAuthStatus()) {
    //   location.href = 'admin/login';
    //   return false;
    // }
    return true;
  }
}
