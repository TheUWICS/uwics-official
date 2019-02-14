import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPageRoutingModule } from './events-page-routing.module';
import {EventsPageComponent} from './events-page/events-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatTabsModule} from '@angular/material/tabs'
import { SharedModule } from "../shared/shared.module";
import { PreviousEventsComponent } from './previous-events/previous-events.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { CalenderEventComponent } from './calender-event/calender-event.component';

@NgModule({
  declarations: [EventsPageComponent, PreviousEventsComponent, UpcomingEventComponent, CalenderEventComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    EventsPageRoutingModule,
    SharedModule
  ]
})
export class EventsPageModule { }
