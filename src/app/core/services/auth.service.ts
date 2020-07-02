import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfoUrl = 'https://api-staging.openreg.thinc.in.th/auth/me';
  private loginUrl = 'https://api-staging.openreg.thinc.in.th/auth/sign-in';

  // private registerUrl: string = "https://api-staging.openreg.thinc.in.th/"

  constructor(private http: HttpClient) {}

  userInfo() {
    return this.http.get(this.userInfoUrl, {});
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.loginUrl, {
      email,
      password,
    });
  }

  // register() {
  //   return
  // }
}
