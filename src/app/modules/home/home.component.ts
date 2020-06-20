import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/backend-client';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  event$: Observable<any>;

  org$: Observable<any>;

  constructor(public service: HomeService, private apiService: ApiService) {
    this.event$ = this.apiService.eventControllerFindAll();
    this.org$ = this.apiService.organizationControllerGetMembers('ad'); // should throw error
  }

  ngOnInit() {
    this.apiService
      .authControllerLogin({ email: 'new@norapat.com', password: '12345678' }) // unauthorized
      .subscribe((e) => console.log(e, 'login'));
  }

  changeMessage() {
    const characters = this.service.message.split('');
    const char = characters.shift();
    characters.push(char || '');
    this.service.message = characters.join('');
    // create new user
    // this.apiService
    //   .userControllerCreate({
    //     dateOfBirth: new Date(),
    //     email: 'new@norapat.com',
    //     password: '12345678',
    //     firstName: { en: 'norapat', th: 'norapat' },
    //     lastName: { en: 'norapat', th: 'norapat' },
    //     title: { en: 'mr', th: 'mr' },
    //   })
    //   .subscribe((result) => console.log(result, 'create result'));
  }

  changeRxMessage() {
    this.service.emitNewMessage();
  }
}
