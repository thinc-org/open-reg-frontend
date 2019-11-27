import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/api/services';
import { Router } from '@angular/router';
import { map, pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  isAuthenticated$ = this.authService.isAuthenticated$;
  currentUser$ = this.authService.currentUser$;
  formId$ = this.apiService.getFormAll().pipe(
    map(forms =>
      forms.find(form => {
        return form.title === 'CU-TU Football Contact List';
      })
    ),
    pluck('_id')
  );
  userForm$ = this.apiService.getUserForm().pipe(shareReplay(1));

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
  ) {
  }

  submitForm(data: any) {
    this.apiService
      .postUserForm(data)
      .subscribe(_ => this.router.navigate(['/', 'register']));
  }
}
