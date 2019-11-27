import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, flatMap } from 'rxjs/operators';
import { PageRouteProps } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'open-reg-frontend';
  isFooterVisible = false;
  isNavbarVisible = false;

  constructor(
    translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
        flatMap((route: ActivatedRoute) => route.data)
      )
      .subscribe((props: PageRouteProps) => {
        this.isFooterVisible = props.footer;
        this.isNavbarVisible = props.navbar;
      });
  }
}
