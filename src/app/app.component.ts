import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterService } from './core/services/footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'open-reg-frontend';

  constructor(translate: TranslateService, private footerService: FooterService) {
    translate.setDefaultLang('en');

    translate.use('en');
  }

  get isFooterVisible() {
    return this.footerService.visible;
  }
}
