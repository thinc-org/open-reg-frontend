import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { take, pluck, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/api/services';
import { empty, EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginError$ = new Subject<string>();
  constructor(
    private sso: ChulaSsoService,
    private route: ActivatedRoute,
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
      .subscribe(console.log, error => {
        this.loginError$.next('Something went wrong, Please try again');
      });
  }

  login() {
    this.loginError$.next();
    this.sso.login();
  }
}
