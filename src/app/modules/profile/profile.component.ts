import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/api/services';
import { Router } from '@angular/router';
import { map, pluck, shareReplay } from 'rxjs/operators';
import { FooterService } from 'src/app/core/services/footer.service';
import { NavbarService } from 'src/app/core/services/navbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy {
  isAuthenticated$ = this.authService.isAuthenticated$;
  currentUser$ = this.authService.currentUser$;
  formId$ = this.apiService.getFormAll().pipe(
    map(forms =>
      forms.find(form => {
        return form.title === 'ลอยกระทง';
      })
    ),
    pluck('_id')
  );
  userForm$ = this.apiService.getUserForm().pipe(shareReplay(1));

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private navbarService: NavbarService,
    private footerService: FooterService
  ) {
    this.navbarService.show();
    this.footerService.show();
  }

  submitForm(data: any) {
    this.apiService
      .postUserForm(data)
      .subscribe(_ => this.router.navigate(['/', 'register']));
  }
  ngOnDestroy() {}
}
