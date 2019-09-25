import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiInterface {
  get<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T>;
  post<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T>;
  put<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T>;
  delete<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T>;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService implements ApiInterface {
  static BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http
      .get<T>(ApiService.BASE_URL + url, { params, observe: 'response' })
      .pipe(map(res => res.body));
  }

  post<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http.post<T>(url, { params, observe: 'response' });
  }

  put<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http
      .get<T>(url, { params, observe: 'response' })
      .pipe(map(res => res.body));
  }

  delete<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    return this.http
      .get<T>(url, { params, observe: 'response' })
      .pipe(map(res => res.body));
  }
}
