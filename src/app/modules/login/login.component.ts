import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { take, pluck, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/api/services';
import { EMPTY } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private sso: ChulaSsoService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        take(1),
        pluck('params'),
        pluck('ticket'),
        switchMap((ticket: string) => {
          if (ticket) {
            return this.apiService.getChulaSsoValidateTicket(ticket);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(
        ({ token }: { token: string }) => {
          this.authService.setToken(token);
          this.router.navigate(['/', 'profile']);
        },
        _ => {
          this.notification.showError('Something went wrong, Please try again');
          this.router.navigate(['/', 'login']);
        }
      );
  }

  login() {
    this.sso.login();
  }
}
