import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleLoginComponent } from './console-login.component';

describe('ConsoleLoginComponent', () => {
  let component: ConsoleLoginComponent;
  let fixture: ComponentFixture<ConsoleLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
