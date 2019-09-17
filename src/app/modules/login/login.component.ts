import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from 'ngx-strongly-typed-forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginInfo } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<LoginInfo>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group<LoginInfo>({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    this.auth.login(this.loginForm.value);
    this.router.navigate(['/admin']);
  }
}
