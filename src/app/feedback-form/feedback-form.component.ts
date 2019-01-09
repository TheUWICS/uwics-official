import {Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FeedbackFormComponent>) { }

  ngOnInit() {
  }

  send() {
    console.log('Message sent');
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
