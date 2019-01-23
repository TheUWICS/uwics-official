import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderComponent} from './page-header/page-header.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    PageHeaderComponent,
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class SharedModule { }
