import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-text',
  templateUrl: './arrow-text.component.html',
  styleUrls: ['./arrow-text.component.scss'],
})
export class ArrowTextComponent implements OnInit {
  @Input() isRight = true;

  constructor() {}

  ngOnInit() {}
}
