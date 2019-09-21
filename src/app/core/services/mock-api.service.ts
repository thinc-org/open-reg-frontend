import { Injectable } from '@angular/core';
import { ApiInterface } from './api.service';
import { Observable, timer, Subject } from 'rxjs';
import { TextboxQuestion } from '../model/questions.model';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MockApiService implements ApiInterface {
  get<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    switch (url) {
      case 'questions':
        let response = new Subject<any>();
        timer(1000).subscribe(() => {
          response.next({
            questions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((e, i) => {
              i += 1;
              return new TextboxQuestion({
                description: `something ${i}`,
                key: `question ${i}`,
                label: `label ${i}`,
                order: i,
                validators: [Validators.required, Validators.email], // not dynamic yet
                title: `QUESTION ${i}`,
                value: `prefilled value`,
                group: Math.ceil(i / 4)
              });
            }),
            group: [
              { n: 1, title: 'Group A', description: 'ABC' },
              { n: 2, title: 'Group B', description: 'ABC' },
              { n: 3, title: 'Group C', description: 'ABC' }
            ]
          });
        });
        return response;
    }
    throw new Error('Method not implemented.');
  }
  post<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    throw new Error('Method not implemented.');
  }
  put<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    throw new Error('Method not implemented.');
  }
  delete<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
