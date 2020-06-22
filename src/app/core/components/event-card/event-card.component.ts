import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'backend-client/model/models';
import { EventCardType } from '../../types/constant';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() data: Event | null = null;
  @Input() type: EventCardType = EventCardType.POCKET;

  constructor() {}

  ngOnInit(): void {
    if (!Object.values(EventCardType).includes(this.type)) {
      this.type = EventCardType.POCKET;
    }
  }
}
