import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { take, pluck, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/api/services';
import { EMPTY, Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginError$ = new Subject<string>();
  constructor(
    private sso: ChulaSsoService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
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
          this.loginError$.next('Something went wrong, Please try again');
          this.router.navigate(['/']);
        }
      );
  }

  login() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['profile']);
    } else {
      this.loginError$.next();
      this.sso.login();
    }
  }
}
