import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderComponent} from './page-header/page-header.component';
import {ProjectCardComponent} from '../project-page/project-card/project-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    PageHeaderComponent,
    ProjectCardComponent
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class SharedModule { }
