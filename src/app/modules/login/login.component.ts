import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../core/services/authenticate.service';
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
    private authService: AuthenticateService,
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
      const { email } = this.loginForm.value;
      const { password } = this.loginForm.value;
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
