import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Theme } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public service: HomeService,
    private themeService: ThemeService
  ) {}

  darkTheme() {
    this.themeService.changeTheme(Theme.DARK);
  }

  lightTheme() {
    this.themeService.changeTheme(Theme.LIGHT);
  }

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
