import { Component, OnInit } from '@angular/core';
import {HeaderText, ProjectInfo} from '../../../model';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  header_text: HeaderText;
  approved: ProjectInfo[] = [];

  constructor(private db: DataService) {
    this.header_text = {
      heading: 'Members\' Projects',
      p_text: 'The Computing Society is filled with talented members eager to embark on their journey into the world of coding and\n' +
        '    software development. Below are some of the projects that they have done, either when they were learning something\n' +
        '    new or building a project of their own.'
    };
  }

  ngOnInit() {
    this.db.fetchData('accepted_projects').then((data: ProjectInfo[]) => {
      this.approved = data;
    });

  }

}
