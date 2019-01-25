import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {ProjectDialogComponent} from './project-dialog/project-dialog.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectDialogComponent,
  ],
  exports: [
    ProjectCardComponent,
    ProjectDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule
  ],
  entryComponents: [ProjectDialogComponent]
})
export class SharedProjectModule { }
