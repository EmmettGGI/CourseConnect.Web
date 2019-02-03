import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleNewquestionComponent } from './console-newquestion.component';

describe('ConsoleNewquestionComponent', () => {
  let component: ConsoleNewquestionComponent;
  let fixture: ComponentFixture<ConsoleNewquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleNewquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleNewquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
