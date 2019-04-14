import { Component, OnInit, Inject } from '@angular/core';
import {EventsInfo} from '../../../model'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-previous-events',
  templateUrl: './previous-events.component.html',
  styleUrls: ['./previous-events.component.scss']
})
export class PreviousEventsComponent implements OnInit {
  events:EventsInfo[]=[];
  selectedEvent:EventsInfo;
  small_screen=false;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.events=[
      {title:"Resume Critique and Interview Session", hosts:"Randell Persad and Rachel Peters", image:"../../../assets/events/Resume Session.jpg",description:"TBA"},
      {title:"Android Session", hosts:"Justin Ramjattan and Qarun Bissoondial", image:"../../../assets/events/Android Session.png",description:"Introduction to android development where we create a basic to do list application."},
      {title:"Machine Learning Session", hosts:"None", image:"../../../assets/events/Machine Learning Session.png",description:"TBA"},
      {title:"Programming Languages Session", hosts:"None", image:"../../../assets/events/Programming Languaes Session.jpeg",description:"TBA"},
      {title:"Python Session", hosts:"David Orr and Randell Persad", image:"../../../assets/events/Python Session.png",description:"TBA"},
      {title:"Git Session", hosts:"Akil Hosang", image:"../../../assets/events/Git Session.png",description:"TBA"},
      {title:"First Session 2018", hosts:"None", image:"../../../assets/events/First Session 2018.png",description:"TBA"},
      {title:"LAN Party(April 2018)", hosts:"", image:"../../../assets/events/LAN PARTY.jpg",description:"TBA"},
    ];
    this.small_screen = window.innerWidth <= 768;
  }
  onResize(event) {
    this.small_screen = event.target.innerWidth <= 768;
  }
  openDialog(event:EventsInfo):void{
    const dialogRef =  this.dialog.open(Dialog, {
      width:'500px',
      data:{title:event.title, hosts:event.hosts, image:event.image,description:event.description}
    });
    dialogRef.afterClosed().subscribe(() => {
   });
  }
}
@Component({
  selector:'app-event-dialog',
  templateUrl:'dialog.component.html',
  styleUrls: ['./previous-events.component.scss']
})
export class Dialog{
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: EventsInfo){}

  onNoClick():void{
    this.dialogRef.close()
  }
}
