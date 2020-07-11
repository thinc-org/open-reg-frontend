import { Component, OnInit } from '@angular/core';

enum Type {
  TEST = 'test',
  TEST1 = 'test1',
  TEST2 = 'test2',
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor() {}

  get types() {
    return Object.values(Type);
  }

  get currentType() {
    return Type.TEST;
  }

  search(text: string) {
    console.log(text);
  }

  onSelect(text: string) {
    console.log(text);
  }

  ngOnInit(): void {}
}
