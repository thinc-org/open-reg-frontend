import { Event } from 'src/backend-client/model/models';
import { Component, OnInit, Input } from '@angular/core';

enum EventCardType {
  POCKET = 'pocket',
  BAR_LIST_SMALL = 'bar-list-small',
}

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() data: Event | null = null;
  @Input() type: EventCardType = EventCardType.POCKET;

  constructor() {}

  ngOnInit(): void {}
}
