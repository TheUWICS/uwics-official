import { Component, OnInit } from '@angular/core';
import {HeaderText} from '../../../model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  // TODO Get pictures for 3 rows of information
  // TODO Fill in 3 rows with information

  header_text: HeaderText;
  placeholder = 'The University of the West Indies Computing Society (UWICS) was established in 1996. The purpose of this society is to ' +
    'forge a plan that focuses on computing and information technology in everyday life. UWICS comprises of individuals who are ' +
    'enthusiastic about the applications of technology whether it is learning about the world of programming, gaining a better ' +
    'understanding of how augmented reality works, exploring the graphical world involved in creating logos or being educated about the ' +
    'various jobs that are elaborated. We aim to foster an environment that is educational, entertaining and inspiring so that members ' +
    'are encouraged to discover and develop their knowledge in computing and information technology.';

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
