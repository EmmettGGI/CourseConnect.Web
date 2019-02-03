import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleAlertsComponent } from './console-alerts.component';

describe('ConsoleAlertsComponent', () => {
  let component: ConsoleAlertsComponent;
  let fixture: ComponentFixture<ConsoleAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
