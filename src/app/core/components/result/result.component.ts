import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() subText: string;
  @Input() mainText: string;
  constructor() { }

  ngOnInit() {
  }

}
