import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultService as ApiService } from 'src/backend-client';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  event$: Observable<any>;

  org$: Observable<any>;

  constructor(public service: HomeService, private apiService: ApiService) {
    this.event$ = this.apiService.eventControllerFindAll();
    this.org$ = this.apiService.organizationControllerGetMembers('ad'); // should throw error
  }

  changeMessage() {
    const characters = this.service.message.split('');
    const char = characters.shift();
    characters.push(char || '');
    this.service.message = characters.join('');
  }

  changeRxMessage() {
    this.service.emitNewMessage();
  }
}
