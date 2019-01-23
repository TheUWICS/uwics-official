import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectPageComponent} from './project-page/project-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProjectPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPageRoutingModule { }
