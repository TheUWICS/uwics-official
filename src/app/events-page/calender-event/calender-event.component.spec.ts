import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderEventComponent } from './calender-event.component';

describe('CalenderEventComponent', () => {
  let component: CalenderEventComponent;
  let fixture: ComponentFixture<CalenderEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
