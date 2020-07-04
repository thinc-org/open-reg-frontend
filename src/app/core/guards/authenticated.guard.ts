import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticatedService } from '../services/authenticated.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticatedService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const reverse = route.data.reverse ? route.data.reverse : null;
    if (reverse) {
      return !(this.authService.isLoggedIn() && !this.authService.isTokenExpired());
    }

    if (this.authService.isLoggedIn() && !this.authService.isTokenExpired()) {
      return true;
    }

    this.router.navigate(['/login'], { state: { redirectUrl: state.url } });
    return false;
  }
}
