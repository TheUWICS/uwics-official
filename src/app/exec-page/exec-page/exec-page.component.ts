import { Component, OnInit } from '@angular/core';
import {HeaderText} from '../../../model';

@Component({
  selector: 'app-exec-page',
  templateUrl: './exec-page.component.html',
  styleUrls: ['./exec-page.component.scss']
})
export class ExecPageComponent implements OnInit {
  link = 'url(\'../../assets/images/execs.jpeg\') center top no-repeat';
  header_text: HeaderText;

  constructor() {
    this.header_text = {
      heading: 'Meet the Executives!',
      p_text: `Lorem ipsum dolor sit amet, tempor expetendis eum no, vim te errem graecis probatus. Ut duo audire adipiscing
      vituperatoribus. Mea at eius postea fabellas, ei prompta mandamus quo. Ad cum quem tollit, justo oblique cum no.
      Ex nam convenire constituam, fuisset phaedrum ei sed.`
    };
  }

  ngOnInit() {
  }

}
