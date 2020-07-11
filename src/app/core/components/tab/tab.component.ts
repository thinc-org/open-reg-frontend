import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() types: string[] = [];
  @Input() currentType: string | null = null;
  @Input() searchInput = '';
  @Output() onsearch = new EventEmitter<string>();
  @Output() onselectType = new EventEmitter<string>();
  constructor() {}

  onSearchChange(text: string) {
    this.onsearch.emit(text);
  }

  onSelectType(type: string) {
    this.currentType = type;
    this.onselectType.emit(type);
  }
}
