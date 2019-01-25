import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProjectReviewComponent } from './project-review/project-review.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { HomeComponent } from './home/home.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {AuthGuard} from '../services/auth.guard';
import {AuthService} from '../services/auth.service';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {SharedModule} from '../shared/shared.module';
import {SharedProjectModule} from '../shared-project/shared-project.module';
import {MatButtonModule} from '@angular/material/button';
import {DataService} from '../services/data.service';

@NgModule({
  declarations: [
    LoginComponent,
    ProjectReviewComponent,
    AdminEventsComponent,
    HomeComponent,
  ],
  exports: [
    LoginComponent,
    ProjectReviewComponent,
    AdminEventsComponent
  ],
  imports: [
    CommonModule,
    SharedProjectModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard, AuthService, DataService]
})
export class AdminModule { }
