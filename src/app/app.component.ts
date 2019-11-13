import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterService } from './core/services/footer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'open-reg-frontend';

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
    this.notification.getObservable().subscribe(notification => {
      const { message, timeout, action } = notification;
      this.snackBar.open(message, action, {
        duration: timeout,
      });
    });
  }

  get isFooterVisible() {
    return this.footerService.visible;
  }
}
