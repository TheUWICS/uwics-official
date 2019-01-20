import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ExecsComponent} from './execs/execs.component';
import {ProjectPageComponent} from './project-page/project-page.component';
import {EventsPageComponent} from './events-page/events-page.component';
import {AppMaterialModule} from '../app-material/app-material.module';
import {WebsiteInfoComponent} from './website-info/website-info.component';
import {TemplatesModule} from '../templates/templates.module';
import {AboutPageComponent} from './about-page/about-page.component';
import {PublicRoutingModule} from './public-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ExecsComponent,
    ProjectPageComponent,
    EventsPageComponent,
    WebsiteInfoComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    AppMaterialModule,
    PublicRoutingModule
  ],
  entryComponents: [WebsiteInfoComponent]
})
export class PublicModule { }
