import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleClassComponent } from './console-class.component';

describe('ConsoleClassComponent', () => {
  let component: ConsoleClassComponent;
  let fixture: ComponentFixture<ConsoleClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
