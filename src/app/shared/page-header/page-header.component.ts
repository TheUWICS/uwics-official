import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

interface HeaderText {
  heading: string;
  p_text: string;
}

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, AfterViewInit{
  @Input() img_link: string;
  @Input() text: HeaderText;
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    const elem = (<HTMLElement>document.querySelector('.welcome'));
    elem.style.background = this.img_link;
    elem.style.backgroundSize = 'cover';
  }

}
