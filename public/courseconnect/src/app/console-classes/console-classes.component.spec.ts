import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleClassesComponent } from './console-classes.component';

describe('ConsoleClassesComponent', () => {
  let component: ConsoleClassesComponent;
  let fixture: ComponentFixture<ConsoleClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
