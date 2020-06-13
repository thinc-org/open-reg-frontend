import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Theme } from 'src/types';
import { ThemeTypes } from 'src/types/constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme$ = new Subject<string>();
  currentThemeEmitter$ = this.currentTheme$.pipe(distinctUntilChanged());

  constructor() {}

  changeTheme(theme: Theme) {
    this.currentTheme$.next(ThemeTypes[theme]);
  }
}
