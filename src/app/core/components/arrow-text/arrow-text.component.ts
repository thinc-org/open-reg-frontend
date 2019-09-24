import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-text',
  templateUrl: './arrow-text.component.html',
  styleUrls: ['./arrow-text.component.scss'],
})
export class ArrowTextComponent implements OnInit {
<<<<<<< HEAD
  @Input() isRight: boolean = true;
  @Input() disabled: boolean = false;
  @Input() mainText:string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
=======
  @Input() isRight = true;

>>>>>>> upstream/dev
  constructor() {}

  ngOnInit() {}
}
