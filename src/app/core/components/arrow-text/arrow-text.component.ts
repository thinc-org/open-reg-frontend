import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-arrow-text',
  templateUrl: './arrow-text.component.html',
  styleUrls: ['./arrow-text.component.scss'],
})
export class ArrowTextComponent implements OnInit {
  @Input() isRight = true;
  @Input() disabled = false;
  @Input() mainText: string;
  @Output() clickEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
