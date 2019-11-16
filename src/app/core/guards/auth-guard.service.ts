import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    public auth: AuthService,
    public router: Router,
    private location: Location
  ) {}
  canActivateChild(): boolean {
    if (!this.auth.isAuthenticated) {
      const currentURL = this.location.path();
      this.router.navigate(['/'], {
        queryParams: { return: currentURL },
      });
      return false;
    }
    return true;
  }
}
