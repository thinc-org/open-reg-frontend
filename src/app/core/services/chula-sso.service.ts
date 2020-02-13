import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ManualApiService } from 'src/app/core/services/manual-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChulaSsoService {
  static url = 'https://account.it.chula.ac.th/';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private apiService: ManualApiService
  ) {}

  login() {
    const location = this.document.location;
    const curUrl = `${location.protocol}//${location.hostname}${
      location.port ? ':' + location.port : ''
    }/${location.search}`;
    location.href =
      ChulaSsoService.url +
      `html/login.html?service=${curUrl}&serviceName=${environment.serviceName}`;
  }

  logout(): Observable<undefined> {
    return this.apiService.get(ChulaSsoService.url + 'logout?service=.');
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
