import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'open-reg-frontend';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    translate.use('en');
  }
}
