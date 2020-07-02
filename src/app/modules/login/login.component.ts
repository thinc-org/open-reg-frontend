import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../backend-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  onSubmit() {
    return this.api
      .authControllerLogin({
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (result) => {
          // console.log(result)
          localStorage.setItem('accessToken', result.accessToken);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
