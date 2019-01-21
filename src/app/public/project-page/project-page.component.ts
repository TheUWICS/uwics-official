import { Component, OnInit } from '@angular/core';
import {ProjectInfo} from '../../../model';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  admin = false;
  projects: ProjectInfo[] = [];

  constructor(private db: DataService) { }

  ngOnInit() {
    console.log('fetching');
    this.db.fetchData('accepted_projects').then((data: ProjectInfo[]) => {
      this.projects = data;
    });

  }

}
