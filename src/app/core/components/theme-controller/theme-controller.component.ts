import { Component, OnInit } from '@angular/core';
import { ThemeTypes } from 'src/types/constants';
import { Theme } from 'src/types';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-controller',
  templateUrl: './theme-controller.component.html',
})
export class ThemeControllerComponent implements OnInit {
  theme = ThemeTypes[Theme.LIGHT];
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
}
