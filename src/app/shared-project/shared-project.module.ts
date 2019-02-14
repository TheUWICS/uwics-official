import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {ProjectCardComponent} from './project-card/project-card.component';

@NgModule({
  declarations: [
    ProjectCardComponent,
  ],
  exports: [
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  entryComponents: []
})
export class SharedProjectModule { }
