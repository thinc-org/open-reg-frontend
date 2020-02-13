import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, flatMap } from 'rxjs/operators';
import { PageRouteProps } from './app-routing.module';
import { isEmptyObject } from './core/functions/commons';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './core/services/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from './core/services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';

const defaultValue: PageRouteProps = {
  navbar: false,
  footer: false,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'open-reg-frontend';
  isFooterVisible = false;
  isNavbarVisible = false;
  destroy$ = new Subject<any>();
  themeClass: string;

  constructor(
    translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private snackBar: MatSnackBar,
    private notification: NotificationService,
    private theme: ThemeService,
    private overlayContainer: OverlayContainer
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          const findFirstChild = (_route: ActivatedRoute) =>
            _route.firstChild ? findFirstChild(_route.firstChild) : _route;
          return findFirstChild(route);
        }),
        filter((route: ActivatedRoute) => route.outlet === 'primary'),
        flatMap((route: ActivatedRoute) => route.data),
        map(data => (isEmptyObject(data) ? defaultValue : data))
      )
      .subscribe((props: PageRouteProps) => {
        this.isFooterVisible = props.footer;
        this.isNavbarVisible = props.navbar;
        if (props.title) {
          this.titleService.setTitle(props.title);
        }
      });

    this.notification
      .getObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe(notification => {
        const { message, timeout, action } = notification;
        this.snackBar.open(message, action, {
          duration: timeout,
        });
      });

    this.theme.currentTheme$.pipe(takeUntil(this.destroy$)).subscribe(theme => {
      this.themeClass = theme;
      /* remove old theme class and add new theme class
      we're removing any css class that contains '-theme' string but your theme classes can follow any pattern */
      const overlayContainerClasses = this.overlayContainer.getContainerElement()
        .classList;
      const themeClassesToRemove = Array.from(
        overlayContainerClasses
      ).filter((item: string) => item.includes('-theme'));
      if (themeClassesToRemove.length) {
        overlayContainerClasses.remove(...themeClassesToRemove);
      }
      overlayContainerClasses.add(theme);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
