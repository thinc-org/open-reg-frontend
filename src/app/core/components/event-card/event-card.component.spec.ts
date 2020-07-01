import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Event } from '../../../../backend-client/model/event';

import { EventCardComponent } from './event-card.component';
import { EventCardType } from '../../types/constant';

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
  const EXPECTED_DATE_RANGE = '13 Jun 2020 - 13 Jun 2020';

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

  it('should display Event Name, Start Date and End Date correctly when data is presented', () => {
    component.data = MOCK_EVENT_OBJECT;

    fixture.detectChanges();
    const cardDe = fixture.debugElement;
    const cardEl: HTMLElement = cardDe.nativeElement;
    const titleEl = cardEl.querySelector('.title');
    const datetimeEl = cardEl.querySelector('.datetime');
    expect(titleEl?.textContent).toContain(MOCK_EVENT_OBJECT.name);
    expect(datetimeEl?.textContent).toContain(EXPECTED_DATE_RANGE); // dd MMM yyyy
  });

  it('should not display if data is not presented', () => {
    const LOADING = 'Loading...';

    const cardDe = fixture.debugElement;
    const cardEl: HTMLElement = cardDe.nativeElement;
    const titleEl = cardEl.querySelector('.title');
    const datetimeEl = cardEl.querySelector('.datetime');

    expect(titleEl).toBeNull();
    expect(datetimeEl).toBeNull();
    expect(cardEl.textContent).toMatch(LOADING);
  });

  it('should select className based on card type correctly', () => {
    component.data = MOCK_EVENT_OBJECT;
    fixture.detectChanges();
    const EXPECTED_CLASS = ['card-container', 'pocket'];

    const cardEl: HTMLElement = fixture.debugElement.nativeElement;
    const classList = Array.from(cardEl.children[0].classList);
    expect(classList).toEqual(jasmine.arrayContaining(EXPECTED_CLASS));

    component.type = EventCardType.LIST_SMALL;
    fixture.detectChanges();
    const EXPECTED_CLASS_2 = ['card-container', 'list-small'];
    const classList2 = Array.from(cardEl.children[0].classList);
    expect(classList2).toEqual(jasmine.arrayContaining(EXPECTED_CLASS_2));

    component.type = EventCardType.POCKET;
    fixture.detectChanges();
    const EXPECTED_CLASS_3 = ['card-container', 'pocket'];
    const classList3 = Array.from(cardEl.children[0].classList);
    expect(classList3).toEqual(jasmine.arrayContaining(EXPECTED_CLASS_3));
  });
});
