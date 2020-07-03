import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService, AuthToken, UserDTO} from "../../../backend-client";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private currentUserSubject: BehaviorSubject<Observable<UserDTO> | null>;
  public currentUser: Observable<Observable<UserDTO> | null>;

  constructor(private api: ApiService) {
    this.currentUserSubject = new BehaviorSubject<Observable<UserDTO> | null>(
      this.api.authControllerCurrentUser()
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<AuthToken> {
    return this.api.authControllerLogin({email, password});
  }

  logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

  isTokenExpired(): boolean {
    return false;
  }

  getCurrentUserInfo(): Observable<UserDTO> | null {
    return this.currentUserSubject.value;
  }

  // may have setCurrentUserInfo for editing user information
}
