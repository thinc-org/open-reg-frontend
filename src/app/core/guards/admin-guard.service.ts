import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { withLatestFrom, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(public auth: AuthService, public router: Router) {}
  canActivateChild() {
    return this.auth.checkExportable().pipe(
      withLatestFrom(this.auth.currentUser$),
      map(([ids, user]) => {
        if (!ids.includes(user.info.chulaId)) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }
}
