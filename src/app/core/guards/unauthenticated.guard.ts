import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticateService) {}

  canActivate(): boolean {
    return this.authService.isLoggedIn() && !this.authService.isTokenExpired();
  }
}
