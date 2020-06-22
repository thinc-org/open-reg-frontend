import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, skip } from 'rxjs/operators';
import { Theme } from 'types';
import { ThemeTypes } from 'types/constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme$ = new BehaviorSubject<string>('');
  currentThemeEmitter$ = this.currentTheme$.pipe(skip(1), distinctUntilChanged());

  constructor() {}

  changeTheme(theme: Theme) {
    this.currentTheme$.next(ThemeTypes[theme]);
  }

  get currentTheme() {
    return this.currentTheme$.value;
  }
}
