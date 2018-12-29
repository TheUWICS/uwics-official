import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ExecsComponent } from './execs/execs.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { EventComponent } from './event/event.component';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ExecCardComponent } from './exec-card/exec-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExecsComponent,
    EventComponent,
    ExecCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatRippleModule,
    MatSnackBarModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(update: SwUpdate, snackbar: MatSnackBar) {
    update.available.subscribe(() => {
      console.log('Update Available');
      const snack = snackbar.open('A new version of this application is available! :D', 'Reload');

      snack.onAction().subscribe(() => {
        window.location.reload(true);
      });

    });

  }
}
