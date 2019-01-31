import { Component, OnInit } from '@angular/core';
import {HeaderText} from '../../../model';

@Component({
  selector: 'app-exec-page',
  templateUrl: './exec-page.component.html',
  styleUrls: ['./exec-page.component.scss']
})
export class ExecPageComponent implements OnInit {

  // TODO - Add short description about executives at the top of the page
  // TODO - Request images from exec members to fill into the page
  // TODO - Request short description of self from all exec members
  // TODO - Request links to Github, personal websites, etc from members

  link = 'url(\'../../assets/images/execs.jpeg\') center top no-repeat';
  header_text: HeaderText;

  constructor() {
    this.header_text = {
      heading: 'Meet the Executives!',
      p_text: 'It takes a lot of drive, energy, passion and commitment to keep the Computing Society interactive and meaningful. Meet ' +
        'some of the people who make it possible.'
    };
  }

  ngOnInit() {
  }

}
