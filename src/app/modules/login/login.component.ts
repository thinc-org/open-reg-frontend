import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticateService } from '../../core/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.loginForm.invalid) {
      console.log('valid');
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
      this.router.navigate(['/']);
    }
  }
}
