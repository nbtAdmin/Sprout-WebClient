import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventConfirmComponent } from './new-event-confirm.component';

describe('NewEventConfirmComponent', () => {
  let component: NewEventConfirmComponent;
  let fixture: ComponentFixture<NewEventConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
