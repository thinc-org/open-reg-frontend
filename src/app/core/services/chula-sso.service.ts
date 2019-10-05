import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChulaSsoService {
  static url = 'https://account.it.chula.ac.th/';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private apiService: ApiService
  ) {}

  login() {
    const curUrl = `${this.document.location.protocol}//${
      this.document.location.hostname
    }${
      this.document.location.port ? ':' + this.document.location.port : ''
    }/login`;
    this.document.location.href =
      ChulaSsoService.url +
      `html/login.html?service=${curUrl}&serviceName=${environment.serviceName}`;
  }

  logout(): Observable<undefined> {
    return this.apiService.post(ChulaSsoService.url + '/logout');
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
