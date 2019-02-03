import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleQuestionComponent } from './console-question.component';

describe('ConsoleQuestionComponent', () => {
  let component: ConsoleQuestionComponent;
  let fixture: ComponentFixture<ConsoleQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
