import { Component, OnInit } from '@angular/core';
import { HeaderText, EventsInfo } from "../../../model";
@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  header_text:HeaderText;
  constructor() {
    this.header_text={
      heading:"Meetings/Events",
      p_text:"Current and Past Events at the UWI Computing Society."
    }
  }

  ngOnInit() {
  }
}
