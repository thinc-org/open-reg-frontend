import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {}

  login() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['profile']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
