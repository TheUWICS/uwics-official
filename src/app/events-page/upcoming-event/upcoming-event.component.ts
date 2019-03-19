import { Component, OnInit } from '@angular/core';
import {EventsInfo} from '../../../model'
@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.scss']
})
export class UpcomingEventComponent implements OnInit {

  currentEvent:EventsInfo
  constructor() { }

  ngOnInit() {
    this.currentEvent={title:'Application System Stack',image:'../../../assets/events/Application Stack.png',hosts:"UWICS BOARD",description:"This is a text to view if it shows Good."}
  }

}
