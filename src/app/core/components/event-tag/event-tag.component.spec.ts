import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTagComponent } from './event-tag.component';

describe('EventTagComponent', () => {
  let component: EventTagComponent;
  let fixture: ComponentFixture<EventTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventTagComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
