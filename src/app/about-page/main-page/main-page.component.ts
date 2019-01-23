import { Component, OnInit } from '@angular/core';
import {HeaderText} from '../../../model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  link = 'url(\'../../assets/images/header.png\') center top no-repeat';
  header_text: HeaderText;
  placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
    '      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
    '      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
    '      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  all_content = [{
    title: 'Lorem Ipsum',
    text: this.placeholder
  },
    {
      title: 'Lorem Ipsum',
      text: this.placeholder
    },
    {
      title: 'Lorem Ipsum',
      text: this.placeholder
    },
  ];
  constructor() {
    this.header_text = {
      heading: 'About us',
      p_text: this.placeholder
    };
  }

  ngOnInit() {
  }

}
