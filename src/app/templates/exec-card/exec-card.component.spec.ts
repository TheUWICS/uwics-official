import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecCardComponent } from './exec-card.component';

describe('ExecCardComponent', () => {
  let component: ExecCardComponent;
  let fixture: ComponentFixture<ExecCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
