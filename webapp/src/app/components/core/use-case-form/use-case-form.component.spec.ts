import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseFormComponent } from './use-case-form.component';

describe('UseCaseFormComponent', () => {
  let component: UseCaseFormComponent;
  let fixture: ComponentFixture<UseCaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
