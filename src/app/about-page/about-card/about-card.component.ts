import {Component, Input, OnInit} from '@angular/core';

export interface Info {
  title: string;
  text: string;
}

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {
  @Input() content: Info;
  @Input() num: number;

  constructor() {
  }

  ngOnInit() {
    if (this.num % 2 === 1) {
      const children = document.getElementsByClassName('main--content')[this.num].childNodes;
      children[0].parentNode.insertBefore(children[1], children[0]);
    }
  }

}
