import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { withLatestFrom, map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(
    public auth: AuthService,
    public router: Router,
    private location: Location
  ) {}
  canActivateChild() {
    return this.auth.checkExportable().pipe(
      withLatestFrom(this.auth.currentUser$),
      map(([ids, user]) => {
        if (!ids.includes(user.info.chulaId)) {
          const currentURL = this.location.path();
          this.router.navigate(['/'], {
            queryParams: { redirectto: currentURL },
          });
          return false;
        }
        return true;
      })
    );
  }
}
