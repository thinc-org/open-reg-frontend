import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedService } from '../../core/services/authenticated.service';
import { ApiService } from '../../../backend-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  redirectUrl = '/';

  constructor(
    private authService: AuthenticatedService,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.redirectUrl = navigation.extras.state.redirectUrl;
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.loginForm.invalid) {
      const { email, password } = this.loginForm.value;
      this.apiService.authControllerLogin({ email, password }).subscribe(
        (authToken) => {
          this.authService.login(authToken);

          // this should redirect back to all previous route, not only page that have auth guard.
          this.router.navigate([this.redirectUrl]);
        },
        (error) => {
          // sending error popup or message
          console.log(error);
        }
      );
    }
  }
}
