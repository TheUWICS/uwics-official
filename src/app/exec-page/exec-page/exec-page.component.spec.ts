import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecPageComponent } from './exec-page.component';

describe('ExecPageComponent', () => {
  let component: ExecPageComponent;
  let fixture: ComponentFixture<ExecPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
