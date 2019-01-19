import { Component, OnInit } from '@angular/core';
import {ProjectInfo} from '../../../model';
import {DBService} from '../../db.service';

@Component({
  selector: 'app-project-review',
  templateUrl: './project-review.component.html',
  styleUrls: ['./project-review.component.scss']
})
export class ProjectReviewComponent implements OnInit {
  admin = true;
  pending: ProjectInfo[];

  constructor(private db: DBService) { }

  ngOnInit() {
    this.pending = this.db.readAll('pending_projects');
  }

}
