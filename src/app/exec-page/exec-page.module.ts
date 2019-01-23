import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecPageRoutingModule } from './exec-page-routing.module';
import { ExecPageComponent } from './exec-page/exec-page.component';
import {SharedModule} from '../shared/shared.module';
import {ExecCardComponent} from './exec-card/exec-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ExecPageComponent,
    ExecCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatButtonModule,
    ExecPageRoutingModule
  ]
})
export class ExecPageModule { }
