import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { notNull } from '../functions/predicates';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$ = new BehaviorSubject<User>(
    JSON.parse(localStorage.getItem('user')) || null
  );
  isAuthenticated$ = this.currentUser$.pipe(map(notNull));

  constructor() {}

  login({ username, password, remember }: LoginInfo) {
    this.currentUser$.next({
      name: 'Ham'
    });
  }

  logout() {
    this.currentUser$.next(undefined);
  }
}

export interface LoginInfo {
  username: string;
  password: string;
  remember: boolean;
}

export interface User {
  name: string;
}
