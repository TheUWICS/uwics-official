import {Component, Input, OnInit} from '@angular/core';
import {ProjectInfo} from '../../../model';
import {MatDialog} from '@angular/material/dialog';
import {ProjectDialogComponent} from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: ProjectInfo;
  @Input() admin: boolean;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(ProjectDialogComponent, {
      data: {
        project: this.project,
        admin: this.admin
      }
    });

    if (window.innerWidth < 768) { (<HTMLElement>document.querySelector('.mat-dialog-container')).style.height = '75vh'; }
  }

}
