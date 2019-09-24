import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { notNull } from '../functions/predicates';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChulaSsoService {
  currentUser$ = new BehaviorSubject<ChulaSSOUser>(undefined);
  isSSOAuthenticated$ = this.currentUser$.pipe(map(notNull));

  constructor() {}

  login() {
    this.currentUser$.next({
      uid: '01',
      username: 'hamtheinw',
      gecos: 'idkwhatthismeans',
      email: 'veryLongEmail@email.com',
      roles: ['student'],
      ouid: '6031763021',
    });
  }

  logout() {
    this.currentUser$.next(undefined);
  }
}

export interface ChulaSSOUser {
  uid: string;
  username: string;
  gecos: string;
  email: string;
  roles: string[];
  ouid: string;
}
