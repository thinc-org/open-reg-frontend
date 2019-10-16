import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(public auth: AuthService, public router: Router) {}
  canActivateChild(): boolean {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
