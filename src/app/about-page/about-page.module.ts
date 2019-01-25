import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {AboutCardComponent} from './about-card/about-card.component';
import {SharedModule} from '../shared/shared.module';
import {WebsiteInfoComponent} from './website-info/website-info.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    MainPageComponent,
    AboutCardComponent,
    WebsiteInfoComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
    AboutPageRoutingModule
  ],
  entryComponents: [WebsiteInfoComponent]
})
export class AboutPageModule { }
