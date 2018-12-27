import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec-card',
  templateUrl: './exec-card.component.html',
  styleUrls: ['./exec-card.component.scss']
})
export class ExecCardComponent implements OnInit {

  small_screen = false;

  constructor() { }

  ngOnInit() {
    this.small_screen = window.innerWidth <= 900;
  }

  onResize(event) {
    this.small_screen = event.target.innerWidth <= 900;
  }

}
