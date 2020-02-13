import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { take, pluck, switchMap, startWith } from 'rxjs/operators';
import { ApiService } from 'src/app/api/services';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  validateSSO$: Observable<any>;
  waitingForValidation = false;
  constructor(
    private sso: ChulaSsoService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.validateSSO$ = this.route.queryParamMap.pipe(
      take(1),
      pluck('params'),
      pluck('ticket'),
      switchMap((ticket: string) => {
        if (ticket) {
          return this.apiService
            .getChulaSsoValidateTicket(ticket)
            .pipe(startWith({}));
        } else {
          return EMPTY;
        }
      })
    );
    this.validateSSO$.subscribe(
      ({ token }: { token: string }) => {
        if (token) {
          this.authService.setToken(token);
          this.router.navigate(['/', 'profile']);
        } else {
          this.waitingForValidation = true;
        }
      },
      _ => {
        this.notification.showError('Something went wrong, Please try again');
        this.waitingForValidation = false;
        this.router.navigate(['/']);
      }
    );
  }

  login() {
    this.sso.login();
  }
}
