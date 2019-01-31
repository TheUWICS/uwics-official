import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {AboutCardComponent} from './about-card/about-card.component';
import {SharedModule} from '../shared/shared.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    MainPageComponent,
    AboutCardComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    SharedModule,
    AboutPageRoutingModule
  ],
})
export class AboutPageModule { }
