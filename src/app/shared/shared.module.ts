import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderComponent} from './page-header/page-header.component';
import {MatCardModule} from '@angular/material/card';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    PageHeaderComponent,
    FooterComponent
  ],
  exports: [
    PageHeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
