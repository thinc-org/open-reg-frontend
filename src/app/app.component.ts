import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterService } from './core/services/footer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './core/services/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from './core/services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'open-reg-frontend';
  destroy$ = new Subject<any>();
  themeClass: string;
  constructor(
    translate: TranslateService,
    private footerService: FooterService,
    private snackBar: MatSnackBar,
    private notification: NotificationService,
    private theme: ThemeService,
    private overlayContainer: OverlayContainer
  ) {
    translate.setDefaultLang('en');

    translate.use('en');
  }

  ngOnInit() {
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

      // remove old theme class and add new theme class
      // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
      const overlayContainerClasses = this.overlayContainer.getContainerElement()
        .classList;
      const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
        (item: string) => item.includes('-theme')
      );
      if (themeClassesToRemove.length) {
        overlayContainerClasses.remove(...themeClassesToRemove);
      }
      overlayContainerClasses.add(theme);
    });
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

  get isFooterVisible() {
    return this.footerService.visible;
  }

}
