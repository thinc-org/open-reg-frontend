import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme$ = new BehaviorSubject<string>('default-theme');
  constructor() {}

  private changeTheme(theme: string) {
    this.currentTheme$.next(theme);
  }

  setDefaultTheme() {
    this.changeTheme('default-theme');
  }

  setThemeOne() {
    this.changeTheme('theme-1');
  }
}
