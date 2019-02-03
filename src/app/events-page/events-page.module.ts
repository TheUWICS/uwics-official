import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPageRoutingModule } from './events-page-routing.module';
import {EventsPageComponent} from './events-page/events-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import { SharedModule } from "../shared/shared.module";
import { EventsInfoComponent } from './events-info/events-info.component';

@NgModule({
  declarations: [EventsPageComponent, EventsInfoComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    EventsPageRoutingModule,
    SharedModule
  ]
})
export class EventsPageModule { }
