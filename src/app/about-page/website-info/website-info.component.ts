import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

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
  }

  close() {
    this.dialogRef.close();
  }

}


