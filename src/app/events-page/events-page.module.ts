import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPageRoutingModule } from './events-page-routing.module';
import {EventsPageComponent} from './events-page/events-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatTabsModule} from '@angular/material/tabs'
import {MatExpansionModule} from '@angular/material/expansion'
import { SharedModule } from "../shared/shared.module";
import { PreviousEventsComponent, Dialog } from './previous-events/previous-events.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { CalenderEventComponent } from './calender-event/calender-event.component';

@NgModule({
  declarations: [EventsPageComponent, PreviousEventsComponent, UpcomingEventComponent, CalenderEventComponent, Dialog],
  exports:[Dialog],
  entryComponents: [Dialog],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    EventsPageRoutingModule,
    SharedModule
  ],

})
export class EventsPageModule { }
