import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  dark = true;

  theme_dict = {
    'UWICS Dark': 'uwics-dark',
    'UWICS Light': 'uwics-light',
    'Candy Red': 'uwics-pink',
    'Gamer Green': 'uwics-gamer'
  };

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  switch_theme(event) {
    const wrapper = document.querySelector('html');
    console.log(event.target.innerText);
    wrapper.classList.remove(wrapper.classList.item(0));
    wrapper.classList.add(this.theme_dict[event.target.innerText]);
  }

  //   if (this.dark) {
  //     wrapper.classList.add('uwics-light');
  //     wrapper.classList.remove('uwics-dark');
  //   } else {
  //     wrapper.classList.add('uwics-dark');
  //     wrapper.classList.remove('uwics-light');
  //   }
  //
  //   this.dark = !this.dark;
  // }

}
