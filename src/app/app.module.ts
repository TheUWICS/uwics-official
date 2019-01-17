import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExecsComponent } from './execs/execs.component';
import { EventComponent } from './event/event.component';
import { ExecCardComponent } from './exec-card/exec-card.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { WebsiteInfoComponent } from './website-info/website-info.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

import {AdminModule} from './admin/admin.module';
import {AppMaterialModule} from './app-material/app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExecsComponent,
    EventComponent,
    ExecCardComponent,
    AboutPageComponent,
    AboutCardComponent,
    EventsPageComponent,
    WebsiteInfoComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdminModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatRippleModule,
    MatSnackBarModule,
    MatDialogModule,
    AppMaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WebsiteInfoComponent]
})

export class AppModule {
  constructor(update: SwUpdate, public snackbar: MatSnackBar) {
    update.available.subscribe(() => {
      console.log('Update Available');
      const snack = snackbar.open('A new version of this application is available! :D', 'Reload');

      snack.onAction().subscribe(() => {
        window.location.reload(true);
      });

    });
  }
}
