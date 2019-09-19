import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'arrow-text',
  templateUrl: './arrow-text.component.html',
  styleUrls: ['./arrow-text.component.scss']
})
export class ArrowTextComponent implements OnInit {
  @Input('isRight') isRight: boolean = true;
  @Output('onClick') clickEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
