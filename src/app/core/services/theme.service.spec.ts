/* eslint-disable @typescript-eslint/dot-notation */
import { ThemeTypes } from 'src/types/constants';
import { TestBed } from '@angular/core/testing';
import { Theme } from 'src/types';
import { configureTestSuite } from 'ng-bullet';
import { cacheTestingModule } from 'ng-cache-testing-module';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  cacheTestingModule();
  let service: ThemeService;

  configureTestSuite(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should call curentTheme$ behavior with .next() when call method change theme', () => {
    const currentThemeNextSpy = spyOn(service['currentTheme$'], 'next');
    service.changeTheme(Theme.DARK);
    expect(currentThemeNextSpy).toHaveBeenCalledWith(ThemeTypes[Theme.DARK]);
    currentThemeNextSpy.calls.reset();
  });

  it('shoul not trigger currentThemeEmitter$ when call method change theme with previous param', (done) => {
    const subscribeSpy = jasmine.createSpy();
    const themEmitterSubscription = service.currentThemeEmitter$.subscribe((e) => {
      subscribeSpy(e);
      done();
    });

    service.changeTheme(Theme.DARK);
    service.changeTheme(Theme.DARK);
    expect(subscribeSpy).toHaveBeenCalledTimes(1);

    themEmitterSubscription.unsubscribe();
  });
});
