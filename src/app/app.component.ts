import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'open-reg-frontend';
  theme = 'openreg-light-theme';

  constructor(
    private overlayContainer: OverlayContainer,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
    this.themeService.currentThemeEmitter$.subscribe(this.onThemeChange);
    console.log(
      this.overlayContainer.getContainerElement().classList,
      'classList'
    );
  }

  onThemeChange(themeClass: string) {
    this.theme = themeClass;
    const overlayContainerClasses = this.overlayContainer.getContainerElement()
      .classList;
    const themeClassesToRemove = Array.from(
      overlayContainerClasses
    ).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(themeClass);
  }
}
