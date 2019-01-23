import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPageRoutingModule } from './project-page-routing.module';
import {ProjectPageComponent} from './project-page/project-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import {SharedProjectModule} from '../shared-project/shared-project.module';

@NgModule({
  declarations: [
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedProjectModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    ProjectPageRoutingModule
  ]
})
export class ProjectPageModule { }
