import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectCardComponent} from './project-card/project-card.component';
import {AboutCardComponent} from './about-card/about-card.component';
import {ExecCardComponent} from './exec-card/exec-card.component';
import {EventCardComponent} from './event-card/event-card.component';
import {AppMaterialModule} from '../app-material/app-material.module';

@NgModule({
  declarations: [
    EventCardComponent,
    ExecCardComponent,
    AboutCardComponent,
    ProjectCardComponent,
  ],
  exports: [
    EventCardComponent,
    ExecCardComponent,
    AboutCardComponent,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class TemplatesModule { }
