import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RegisterGuard implements CanActivateChild {
  constructor(
    public auth: AuthService,
    public router: Router,
    private location: Location
  ) {}
  canActivateChild() {
    return this.auth.currentUser$.pipe(
      map(user => {
        // not ready yet since backend not provide solution to seperated registered user from unregistered one
        if (!user || !user.info) {
          const currentURL = this.location.path();
          this.router.navigate(['/'], {
            queryParams: { return: currentURL },
          });
          return false;
        }
        return true;
      })
    );
  }
}
