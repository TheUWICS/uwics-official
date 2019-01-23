import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsPageComponent} from './events-page/events-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EventsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPageRoutingModule { }
