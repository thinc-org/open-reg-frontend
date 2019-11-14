import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { notNull } from '../functions/predicates';
import { map, takeUntil, switchMap, filter, pluck } from 'rxjs/operators';
import { ApiService } from 'src/app/api/services';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  token$ = new BehaviorSubject<string>(
    localStorage.getItem('token') === 'undefined'
      ? undefined
      : localStorage.getItem('token')
  );
  currentUser$ = this.token$.pipe(
    filter(notNull),
    switchMap(_ => this.apiService.getUserProfile())
  ) as Observable<any>;
  isAuthenticated$ = this.token$.pipe(map(notNull));

  private _destroy$ = new Subject();

  ngOnDestroy() {
    this._destroy$.next();
  }

  get isAuthenticated() {
    return !!this.token$.value;
  }

  constructor(private apiService: ApiService) {
    this.token$.pipe(takeUntil(this._destroy$)).subscribe(token => {
      if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
    });
  }

  setToken(token: string) {
    this.token$.next(token);
  }

  // TODO: Fix this
  checkExportable() {
    return this.apiService.getFormAll().pipe(
      map(forms =>
        forms.find(form => {
          return form.title === 'CU-TU Football Contact List';
        })
      ),
      pluck('_id'),
      switchMap(id => this.apiService.getFormId(id)),
      map(form => (form as any).readPermissions)
    );
  }

  removeToken() {
    this.token$.next(undefined);
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
