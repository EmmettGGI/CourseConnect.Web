import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleNewclassComponent } from './console-newclass.component';

describe('ConsoleNewclassComponent', () => {
  let component: ConsoleNewclassComponent;
  let fixture: ComponentFixture<ConsoleNewclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleNewclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleNewclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
