import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  constructor() {}

  ngOnInit() {}
}
