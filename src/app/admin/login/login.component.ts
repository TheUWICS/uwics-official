import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const pword = (<HTMLInputElement>document.getElementById('pword')).value;

    this.auth.emailLogin(email, pword);
  }

}
