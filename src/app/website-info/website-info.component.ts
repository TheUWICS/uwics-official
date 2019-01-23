import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {environment} from '../../environments/environment';

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


