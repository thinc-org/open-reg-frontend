import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() mainText = null;
  @Input() mainTextColor = '#000000';
  @Input() textSpace = '5px'
  @Input() mainTextSize = '20px'
  @Input() subText = null;
  @Input() subTextColor = '#B3B3B3';
  @Input() subTextSize = '10px';
  @Input() subTextLs = 'normal';
  @Input() textPos = 'left';
  

  constructor() { }

  ngOnInit() {
  }

}
