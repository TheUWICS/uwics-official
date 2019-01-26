import { Component, OnInit } from '@angular/core';
import { HeaderText } from '../../../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // TODO - Add short, captivating text at the start of the home page about UWICS
  // TODO - Add short text about members' projects before using the project link button
  // TODO - Experiment with design -> try 4 different section cards on the home page, one linking to each page on the website
  // TODO - Fill in text for the "What we stand for" section
  // TODO - Either keep "What we stand for" section on the home page, or move to About Page (and remove the "More about us" button)

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
