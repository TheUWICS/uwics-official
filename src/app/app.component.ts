import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {WebsiteInfoComponent} from './website-info/website-info.component';
import {fadeAnimation} from '../fade.animation';
import {AuthService} from './auth.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [fadeAnimation] // animations tutorial here: https://medium.com/@tanya/angular4-animated-route-transitions-b5b9667cd67c
})
export class AppComponent implements OnDestroy {
  dark = true;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  isLoggedIn: boolean;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, public auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggle() {
    const wrapper = document.querySelector('html');

    if (this.dark) {
      wrapper.classList.remove(wrapper.classList.item(0));
      wrapper.classList.add('uwics-light');
    } else {
      wrapper.classList.remove(wrapper.classList.item(0));
      wrapper.classList.add('uwics-dark');

    }

    this.dark = !this.dark;
  }

  openDialog(): void {
    this.dialog.open(WebsiteInfoComponent);
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
