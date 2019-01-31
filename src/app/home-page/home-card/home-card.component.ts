import {Component, Input, OnInit} from '@angular/core';
import {AbstractCardInfo} from '../../../model';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  @Input() cardinfo: AbstractCardInfo;

  constructor() { }

  ngOnInit() {
  }

}
