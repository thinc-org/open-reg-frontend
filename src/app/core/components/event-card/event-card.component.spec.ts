import { DebugElement } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Event } from '../../../../backend-client/model/event';

import { EventCardComponent } from './event-card.component';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  const MOCK_EVENT_OBJECT: Event = {
    name: 'Mock Test Event 1',
    description: 'This is a event abot mocking',
    organizationID: 'Chula.Org',
    tags: ['Hello', 'World'],
    startDate: ('2020-06-13T13:54:29.808Z' as unknown) as Date,
    endDate: ('2020-06-13T13:54:29.808Z' as unknown) as Date,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventCardComponent],
      imports: [MatCardModule, MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Event Name, Start Date and End Date correctly', () => {
    component.data = MOCK_EVENT_OBJECT;

    fixture.detectChanges();
    const cardDe: DebugElement = fixture.debugElement;
    const cardEl: HTMLElement = cardDe.nativeElement;
    const titleEl = cardEl.querySelector('.title');
    const datetimeEl = cardEl.querySelector('.datetime');
    expect(titleEl?.textContent).toContain(MOCK_EVENT_OBJECT.name);
    expect(datetimeEl?.textContent).toContain('13 Jun 2020 - 13 Jun 2020'); // dd MMM yyyy
  });
});
