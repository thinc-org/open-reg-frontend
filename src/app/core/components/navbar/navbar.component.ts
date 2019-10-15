import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ChulaSsoService } from '../../services/chula-sso.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated$ = this.authService.isAuthenticated$;
  constructor(
    private authService: AuthService,
    private chulaSSOService: ChulaSsoService,
    private router: Router,
    private navbarService: NavbarService
  ) {}

  ngOnInit() {}

  get isVisible() {
    return this.navbarService.visible;
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
}
