import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { RegisterService } from './register.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/api/services';
import { Router } from '@angular/router';
import { map, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService],
})
export class RegisterComponent implements OnInit, OnDestroy {
  isAuthenticated$ = this.authService.isAuthenticated$;
  currentUser$ = this.authService.currentUser$;
  formId$ = (this.apiService.getFormAll() as Observable<any[]>).pipe(
    map((forms: any[]) =>
      forms.find(form => {
        return form.title === 'Loy-Krathong';
      })
    ),
    pluck('_id')
  );

  constructor(
    private chulaSSOService: ChulaSsoService,
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  loginSSO() {
    this.chulaSSOService.login();
  }

  logoutSSO() {
    this.authService.removeToken();
    this.router.navigate(['/']);
    // this.chulaSSOService.logout().subscribe(_ => {

    // });
  }
  ngOnDestroy() {}
}
