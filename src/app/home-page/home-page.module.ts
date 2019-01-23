import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageRoutingRoutingModule} from './home-page-routing.routing.module';
import {HomeComponent} from './home/home.component';
import {EventCardComponent} from '../templates/event-card/event-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule  } from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingRoutingModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomePageModule { }
