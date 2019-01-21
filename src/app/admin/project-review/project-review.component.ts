import { Component, OnInit } from '@angular/core';
import {ProjectInfo} from '../../../model';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-project-review',
  templateUrl: './project-review.component.html',
  styleUrls: ['./project-review.component.scss']
})
export class ProjectReviewComponent implements OnInit {
  admin = true;
  pending: ProjectInfo[];

  constructor(private db: DataService) { }

  ngOnInit() {
    this.db.fetchData('pending_projects').then((data: ProjectInfo[]) => {
      this.pending = data;
    });
  }

}
