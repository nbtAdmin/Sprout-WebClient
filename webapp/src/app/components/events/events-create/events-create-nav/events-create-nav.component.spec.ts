import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateNavComponent } from './events-create-nav.component';

describe('EventsCreateNavComponent', () => {
  let component: EventsCreateNavComponent;
  let fixture: ComponentFixture<EventsCreateNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsCreateNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCreateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
