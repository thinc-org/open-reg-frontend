import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../topic/topic.component';

@Component({
  selector: 'app-arrow-text',
  templateUrl: './arrow-text.component.html',
  styleUrls: ['./arrow-text.component.scss'],
})
export class ArrowTextComponent implements OnInit {
  @Input() isRight = true;
  @Input() disabled = false;
  @Input() mainText: string;
  theme: Theme = {
    mainTextColor: '#ABD0FF',
    subTextColor: '#FFFFFF',
  };
  constructor() {}

  ngOnInit() {}
}
