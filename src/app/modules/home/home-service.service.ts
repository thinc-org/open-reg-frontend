import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(private api: ApiService) {}

  getPosts() {
    return this.api.get<any[]>(ApiService.BASE_URL + 'posts', {});
  }
}
