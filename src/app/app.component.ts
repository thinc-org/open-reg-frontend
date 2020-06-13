import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './core/services/theme.service';
import { Theme } from '../types';
import { ThemeTypes } from '../types/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = ThemeTypes[Theme.LIGHT];
  theme = 'openreg-light-theme';
  containerElement: any;

  constructor(private overlayContainer: OverlayContainer, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentThemeEmitter$.subscribe(this.onThemeChange);
  }

  onThemeChange = (themeClass: string) => {
    this.theme = themeClass;
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) =>
      item.includes('-theme')
    );
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(themeClass);
  };

  changeToDarkTheme() {
    this.themeService.changeTheme(Theme.DARK);
  }

  changeToLightTheme() {
    this.themeService.changeTheme(Theme.LIGHT);
  }
}
