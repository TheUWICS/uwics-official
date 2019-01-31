import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPageRoutingModule } from './project-page-routing.module';
import {ProjectPageComponent} from './project-page/project-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {SharedModule} from '../shared/shared.module';
import {SharedProjectModule} from '../shared-project/shared-project.module';
import {DataService} from '../services/data.service';

@NgModule({
  declarations: [
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedProjectModule,
    MatDividerModule,
    ProjectPageRoutingModule
  ],
  providers: [DataService]
})
export class ProjectPageModule { }
