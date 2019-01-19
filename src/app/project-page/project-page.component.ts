import { Component, OnInit } from '@angular/core';
import {ProjectInfo} from '../../model';
import {DBService} from '../db.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  admin = false;
  projects: ProjectInfo[] = [];

  constructor(private db: DBService) { }

  ngOnInit() {

    this.projects = this.db.readAll('accepted_projects');

  }

}
