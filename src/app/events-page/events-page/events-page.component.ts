import { Component, OnInit } from '@angular/core';
import { HeaderText, EventsInfo } from "../../../model";
@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;

  header_text:HeaderText;
  events:EventsInfo[]=[];
  constructor() { 
    this.header_text={
      heading:"Meetings/Events",
      p_text:"Current and Past Events at the UWI Computing Society."
    }
  }

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    this.events=[
      {title:"Resume Critique and Interview Session", hosts:"Randell Persad", image:"../../../assests/events/Resume Session.jpg",description:"TBA"},
      {title:"Android Session", hosts:"Justin Ramjattan and Qarun Bissoondial", image:"../../../assests/events/Android Session.png",description:"TBA"},
      {title:"LAN PARTY", hosts:"", image:"../../../assests/events/LAN PARTY.png",description:"TBA"},

    ]
  }

}
