import { Component } from '@angular/core';
import { Theme } from 'src/types';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'open-reg';

  constructor(private themeService: ThemeService) {}

  changeToDarkTheme() {
    this.themeService.changeTheme(Theme.DARK);
  }

  changeToLightTheme() {
    this.themeService.changeTheme(Theme.LIGHT);
  }
}
