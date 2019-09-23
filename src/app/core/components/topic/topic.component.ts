import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  @Input() mainText = null;
  @Input() subText = null;
  constructor() {}

  ngOnInit() {}
}
