import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPageRoutingModule } from './events-page-routing.module';
import {EventsPageComponent} from './events-page/events-page.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [EventsPageComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    EventsPageRoutingModule
  ]
})
export class EventsPageModule { }
