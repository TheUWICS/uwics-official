import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageRoutingRoutingModule} from './home-page-routing.routing.module';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {HomeCardComponent} from './home-card/home-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingRoutingModule,
  ]
})
export class HomePageModule { }
