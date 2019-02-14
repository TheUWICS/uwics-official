import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { firebase } from '@firebase/app';
import '@firebase/auth';

@Injectable()
export class AuthService {

  isLoggedIn: boolean;
  auth

  constructor(private router: Router) {
    this.auth = firebase.apps.length === 0
      ? firebase.initializeApp({
        apiKey: 'AIzaSyDOrcuf_DKe9BKzDdeZ3Tla1SDR_NbiUuw',
        authDomain: 'uwics-official.firebaseapp.com',
        databaseURL: 'https://uwics-official.firebaseio.com',
        projectId: 'uwics-official',
        storageBucket: 'uwics-official.appspot.com',
        messagingSenderId: '714702661898'
      }).auth()
      : firebase.apps[0].auth();
  }

  emailLogin(email: string, pword: string): void {
    this.auth.signInWithEmailAndPassword(email, pword).then(() => {
      this.isLoggedIn = true;
      this.router.navigate(['/admin/home']);
    }, (error) => {
      console.log(error);
      this.isLoggedIn = false;
    });
  }

  getAuthStatus(): boolean { return this.isLoggedIn; }
}
