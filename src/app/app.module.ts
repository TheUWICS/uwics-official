import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';

import { AppComponent } from './app.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

import {AppMaterialModule} from './app-material/app-material.module';
import {ProjectDialogComponent} from './templates/project-dialog/project-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatRippleModule,
    MatSnackBarModule,
    MatDialogModule,
    AppMaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProjectDialogComponent]
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
