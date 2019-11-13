import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterService } from './core/services/footer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './core/services/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'open-reg-frontend';
  destroy$ = new Subject<any>();
  constructor(
    translate: TranslateService,
    private footerService: FooterService,
    private snackBar: MatSnackBar,
    private notification: NotificationService
  ) {
    translate.setDefaultLang('en');

    translate.use('en');
  }

  ngOnInit() {
    this.notification.getObservable().pipe(takeUntil(this.destroy$)).subscribe(notification => {
      const { message, timeout, action } = notification;
      this.snackBar.open(message, action, {
        duration: timeout,
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

  get isFooterVisible() {
    return this.footerService.visible;
  }
}
