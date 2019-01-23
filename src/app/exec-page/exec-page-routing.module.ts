import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExecPageComponent} from './exec-page/exec-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ExecPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecPageRoutingModule { }
