import {Component, Input, OnInit} from '@angular/core';
import {ProjectInfo} from '../../../model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  // TODO - Re-style Project cards to make it more appealing
  // TODO - Think of additional information to put on a project card

  @Input() project: ProjectInfo;
  @Input() admin: boolean;
  constructor() { }

  ngOnInit() {
  }

}
