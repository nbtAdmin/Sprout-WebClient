import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPlanComponent } from './events-plan.component';

describe('EventsPlanComponent', () => {
  let component: EventsPlanComponent;
  let fixture: ComponentFixture<EventsPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
