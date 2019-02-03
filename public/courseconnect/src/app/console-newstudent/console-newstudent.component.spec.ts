import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleNewstudentComponent } from './console-newstudent.component';

describe('ConsoleNewstudentComponent', () => {
  let component: ConsoleNewstudentComponent;
  let fixture: ComponentFixture<ConsoleNewstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleNewstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleNewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
