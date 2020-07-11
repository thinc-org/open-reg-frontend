import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Input() input = '';
  @Output() onchange = new EventEmitter<string>();
  constructor() {}

  onChange($event: { target: HTMLInputElement }) {
    this.onchange.emit($event.target.value);
  }
}
