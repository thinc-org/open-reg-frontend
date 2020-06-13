import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  message = 'Hello';

  message$ = new BehaviorSubject<string>('RxMessage');

  emitNewMessage() {
    const characters = this.message$.value.split('');
    const shiftedCharacter = characters.shift() || '';
    characters.push(shiftedCharacter);
    this.message$.next(characters.join(''));
  }
}
