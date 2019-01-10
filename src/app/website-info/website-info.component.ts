import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-website-info',
  templateUrl: './website-info.component.html',
  styleUrls: ['./website-info.component.scss']
})
export class WebsiteInfoComponent implements OnInit {
  version_num: string;

  constructor(private dialogRef: MatDialogRef<WebsiteInfoComponent>) {
  }

  ngOnInit() {
    this.version_num = environment.version_num;
  }

  close() {
    this.dialogRef.close();
  }

}


