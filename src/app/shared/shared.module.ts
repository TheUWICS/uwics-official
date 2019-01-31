import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderComponent} from './page-header/page-header.component';
import {MatCardModule} from '@angular/material/card';
import {FooterComponent} from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    PageHeaderComponent,
    FooterComponent,
  ],
  exports: [
    PageHeaderComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
