import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  message = 'Hello';
  message$ = new BehaviorSubject<string>('RxMessage');

  constructor() {}

  emitNewMessage() {
    const characters = this.message$.value.split('');
    characters.push(characters.shift());
    this.message$.next(characters.join(''));
  }
}
