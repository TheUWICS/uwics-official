import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutCardComponent} from './about-card/about-card.component';
import {AppMaterialModule} from '../app-material/app-material.module';
import {ProjectCardComponent} from './project-card/project-card.component';

@NgModule({
  declarations: [
    AboutCardComponent,
    ProjectCardComponent
  ],
  exports: [
    AboutCardComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
})
export class TemplatesModule { }
