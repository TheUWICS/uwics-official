import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {FeedbackFormComponent} from './feedback-form/feedback-form.component';
import {MatDialog} from '@angular/material';

/** @title Responsive sidenav */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  dark = true;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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
    this.dialog.open(FeedbackFormComponent);
  }
}
