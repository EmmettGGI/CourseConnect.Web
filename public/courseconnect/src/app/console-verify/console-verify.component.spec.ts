import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleVerifyComponent } from './console-verify.component';

describe('ConsoleVerifyComponent', () => {
  let component: ConsoleVerifyComponent;
  let fixture: ComponentFixture<ConsoleVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
