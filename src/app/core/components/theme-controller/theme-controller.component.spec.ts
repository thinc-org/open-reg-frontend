/* eslint-disable @typescript-eslint/dot-notation */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject } from 'rxjs';
import { ThemeTypes } from 'src/types/constants';
import { configureTestSuite } from 'ng-bullet';
import { Theme } from 'src/types';
import { ThemeService } from '../../services/theme.service';
import { ThemeControllerComponent } from './theme-controller.component';

describe('ThemeControllerComponent', () => {
  let component: ThemeControllerComponent;
  let fixture: ComponentFixture<ThemeControllerComponent>;
  let subscribeSpy: jasmine.Spy<any>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeControllerComponent],
      providers: [
        {
          provide: ThemeService,
          useClass: class {
            currentThemeEmitter$ = new Subject();
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    subscribeSpy = spyOn(component['themeService'].currentThemeEmitter$, 'subscribe');
  });

  afterEach(() => {
    subscribeSpy.calls.reset();
  });

  it('should create with default theme annd subscribe to currentThemeEmitter$', () => {
    expect(component).toBeTruthy();
    expect(component.theme).toBe(ThemeTypes[Theme.LIGHT]);

    component.ngOnInit();

    expect(subscribeSpy).toHaveBeenCalledWith(component.onThemeChange);
  });

  it('should change class name to the current selected theme when call onThemeChange', () => {
    component.ngOnInit();
    component.onThemeChange(ThemeTypes[Theme.LIGHT]);

    expect(component.theme).toBe(ThemeTypes[Theme.LIGHT]);
    const currentClasses1 = [...fixture.debugElement.children[0].nativeElement.classList];
    expect(currentClasses1).toEqual([ThemeTypes[Theme.LIGHT]]);

    component.onThemeChange(ThemeTypes[Theme.DARK]);

    fixture.detectChanges();
    expect(component.theme).toBe(ThemeTypes[Theme.DARK]);
    const currentClasses2 = [...fixture.debugElement.children[0].nativeElement.classList];
    expect(currentClasses2).toEqual([ThemeTypes[Theme.DARK]]);

    component.onThemeChange(ThemeTypes[Theme.DARK]);

    fixture.detectChanges();
    expect(component.theme).toBe(ThemeTypes[Theme.DARK]);
    const currentClasses3 = [...fixture.debugElement.children[0].nativeElement.classList];
    expect(currentClasses3).toEqual([ThemeTypes[Theme.DARK]]);
  });

  it('should trigger overlay container service with expected arguments when call onThemeChange', () => {
    const MOCK_CONTAINER_CLASS: any = [ThemeTypes[Theme.DARK]];
    MOCK_CONTAINER_CLASS.remove = jasmine.createSpy();
    MOCK_CONTAINER_CLASS.add = jasmine.createSpy();
    const overlayGetcontainerElementSpy = spyOn(
      component['overlayContainer'],
      'getContainerElement'
    ).and.returnValue({ classList: MOCK_CONTAINER_CLASS } as any);

    component.ngOnInit();
    component.onThemeChange(ThemeTypes[Theme.LIGHT]);

    expect(overlayGetcontainerElementSpy).toHaveBeenCalledTimes(1);
    expect(MOCK_CONTAINER_CLASS.remove).toHaveBeenCalledWith(ThemeTypes[Theme.DARK]);
    expect(MOCK_CONTAINER_CLASS.add).toHaveBeenCalledWith(ThemeTypes[Theme.LIGHT]);

    overlayGetcontainerElementSpy.calls.reset();
  });
});
