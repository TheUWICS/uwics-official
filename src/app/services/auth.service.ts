import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {FireService} from './fire.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;
  auth;

  constructor(private router: Router, private fire: FireService) {
    this.auth = this.fire.fb_auth();
  }

  emailLogin(email: string, pword: string): void {
    this.auth.signInWithEmailAndPassword(email, pword).then((data) => {
      console.log(data);
      this.isLoggedIn = true;
      this.router.navigate(['/admin/home']);
    }, (error) => {
      console.log(error);
      this.isLoggedIn = false;
    });
  }

  getAuthStatus(): boolean { return this.isLoggedIn; }
}
