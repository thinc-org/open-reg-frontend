import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/api/services';
import { Router } from '@angular/router';
import { map, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
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
  userForm$ = this.apiService.getUserForm();

  constructor(
    private chulaSSOService: ChulaSsoService,
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiService.getUserForm().subscribe();
  }

  loginSSO() {
    this.chulaSSOService.login();
  }

  logoutSSO() {
    this.authService.removeToken();
    this.router.navigate(['/']);
    // this.chulaSSOService.logout().subscribe(_ => {

    // });
  }

  submitForm(data: any) {
    this.apiService
      .postUserForm(data)
      .subscribe(_ => this.router.navigate(['/', 'register']));
  }
  ngOnDestroy() {}
}
