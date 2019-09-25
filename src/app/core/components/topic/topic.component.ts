import { Component, OnInit, Input } from '@angular/core';

export interface Theme {
  mainTextColor: string;
  subTextColor: string;
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  @Input() mainText = null;
  @Input() textSpace = '5px';
  @Input() mainTextSize = '20px';
  @Input() subText = null;
  @Input() subTextSize = '10px';
  @Input() subTextLs = 'normal';
  @Input() textPos = 'left';
  @Input() theme: Theme = { mainTextColor: '#4D4D4D', subTextColor: '#B3B3B3' };

  constructor() {}

  ngOnInit() {}
}
