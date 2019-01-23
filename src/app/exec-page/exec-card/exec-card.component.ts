import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec-card',
  templateUrl: './exec-card.component.html',
  styleUrls: ['./exec-card.component.scss']
})

// TODO - Add in an input for an object containing Executive name, position, image and links

export class ExecCardComponent implements OnInit {

  small_screen = false;

  constructor() { }

  ngOnInit() {
    this.small_screen = window.innerWidth <= 768;
  }

  onResize(event) {
    this.small_screen = event.target.innerWidth <= 768;
  }

}
