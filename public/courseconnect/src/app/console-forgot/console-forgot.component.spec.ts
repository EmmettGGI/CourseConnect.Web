import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleForgotComponent } from './console-forgot.component';

describe('ConsoleForgotComponent', () => {
  let component: ConsoleForgotComponent;
  let fixture: ComponentFixture<ConsoleForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
