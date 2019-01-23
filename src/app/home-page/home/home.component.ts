import { Component, OnInit } from '@angular/core';
import { HeaderText } from '../../../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  link = 'url(\'../../assets/images/header.png\') center top no-repeat';
  header_text: HeaderText;

  constructor() {

    this.header_text = {
      heading: 'Welcome to the UWI Computing Society!',
      p_text: 'We seek active interest in emerging technology, etc... (More description to come)'
    };

  }

  ngOnInit() {
  }

}
