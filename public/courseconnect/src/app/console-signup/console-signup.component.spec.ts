import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleSignupComponent } from './console-signup.component';

describe('ConsoleSignupComponent', () => {
  let component: ConsoleSignupComponent;
  let fixture: ComponentFixture<ConsoleSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
