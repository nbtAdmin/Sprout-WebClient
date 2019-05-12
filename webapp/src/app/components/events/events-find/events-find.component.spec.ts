import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFindComponent } from './events-find.component';

describe('EventsFindComponent', () => {
  let component: EventsFindComponent;
  let fixture: ComponentFixture<EventsFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
