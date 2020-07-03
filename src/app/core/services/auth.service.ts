import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from '../../../backend-client';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private api: ApiService) {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      JSON.parse(<string>localStorage.getItem('CURRENT_USER'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Subscription {
    this.api
      .authControllerCurrentUser()
      .subscribe(
        (result) => {
          localStorage.setItem('CURRENT_USER', JSON.stringify(result));
        },
        (error) => console.log(error)
      )
      .unsubscribe();
    return this.api
      .authControllerLogin({
        email,
        password,
      })
      .subscribe(
        (result) => {
          localStorage.setItem('ACCESS_TOKEN', result.accessToken);
        },
        (error) => console.log(error)
      );
  }

  logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

  getCurrentUserInfo(): User {
    return JSON.parse(<string>localStorage.getItem('CURRENT_USER'));
  }

  // may have setCurrentUserInfo for editing user information
}
