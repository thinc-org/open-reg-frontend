import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-tag',
  templateUrl: './event-tag.component.html',
  styleUrls: ['./event-tag.component.scss'],
})
export class EventTagComponent implements OnInit {
  @Input() tagName = 'Tag';
  @Input() removable = false;
  @Output() removeTag: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  remove(tagName: string) {
    this.removeTag.emit(tagName);
  }
}
