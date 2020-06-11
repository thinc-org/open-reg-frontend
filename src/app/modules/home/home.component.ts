import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public service: HomeService) {}

  ngOnInit() {}

  changeMessage() {
    const characters = this.service.message.split('');
    const char = characters.shift();
    characters.push(char ? char : '');
    this.service.message = characters.join('');
  }

  changeRxMessage() {
    this.service.emitNewMessage();
  }
}
