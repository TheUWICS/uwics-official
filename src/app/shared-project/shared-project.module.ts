import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectCardComponent} from './project-card/project-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ProjectCardComponent,
  ],
  exports: [
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedProjectModule { }
