import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleSidebarComponent } from './console-sidebar.component';

describe('ConsoleSidebarComponent', () => {
  let component: ConsoleSidebarComponent;
  let fixture: ComponentFixture<ConsoleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
