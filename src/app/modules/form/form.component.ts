import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  currentPage = 2;
  item = [].constructor(100);
  constructor() {}

  ngOnInit() {}
}
