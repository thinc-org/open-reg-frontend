import { Injectable } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { ApiService } from 'src/app/api/services';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration as __Configuration } from '../../api/api-configuration';

@Injectable({
  providedIn: 'root',
})
export class MockApiService extends ApiService {
  getUserForm(): Observable<any> {
    const response = new Subject<any>();
    response.subscribe(e => console.log(e, 'e'));
    response.next({});
    timer(1000).subscribe(() => {
      response.next({
        eventId: '',
        title: 'ผู้ใช้',
        groups: [
          {
            title: 'ข้อมูลส่วนตัว',
            description: ' Personal Information',
            order: 1,
          },
          // {
          //   title: 'ข้อมูลการติดต่อ',
          //   description: 'Contact Information',
          //   order: 2,
          // },
        ],
        questions: [
          {
            key: 'file',
            value: '',
            order: 1,
            group: 1,
            type: 'IMAGE',
            label: 'รูปภาพ',
            required: true,
          },
          // {
          //   key: 'title',
          //   value: '0',
          //   order: 1,
          //   group: 1,
          //   type: 'DROPDOWN',
          //   label: 'คำนำหน้า (ภาษาไทย)',
          //   choices: ['นาย', 'นางสาว', 'นาง'],
          //   required: true,
          // },
          // {
          //   key: 'firstName',
          //   value: 'นรภัทร',
          //   order: 2,
          //   group: 1,
          //   type: 'TEXT',
          //   label: 'ชื่อ (ภาษาไทย)',
          //   required: true,
          // },
          // {
          //   key: 'lastName',
          //   value: 'บุพโพดม',
          //   order: 3,
          //   group: 1,
          //   type: 'TEXT',
          //   label: 'นามสกุล (ภาษาไทย)',
          //   required: true,
          // },
          // {
          //   key: 'nickName',
          //   value: 'นิว',
          //   order: 4,
          //   group: 1,
          //   type: 'TEXT',
          //   label: 'ชื่อเล่น (ภาษาไทย)',
          //   required: true,
          // },
          // {
          //   key: 'titleEn',
          //   value: '0',
          //   order: 5,
          //   group: 1,
          //   type: 'DROPDOWN',
          //   label: 'คำนำหน้า (ภาษาอังกฤษ)',
          //   choices: ['Mr.', 'Ms.', 'Mrs.'],
          //   required: true,
          // },
          // {
          //   key: 'firstNameEn',
          //   value: 'Norapat',
          //   order: 6,
          //   group: 1,
          //   type: 'TEXT',
          //   label: 'ชื่อ (ภาษาอังกฤษ)',
          //   required: true,
          // },
          // {
          //   key: 'lastNameEn',
          //   value: 'Buppodom',
          //   order: 7,
          //   group: 1,
          //   type: 'TEXT',
          //   label: 'นามสกุล (ภาษาอังกฤษ)',
          //   required: true,
          // },
          // {
          //   key: 'nickNameEn',
          //   value: 'New',
          //   order: 8,
          //   group: 1,
          //   type: 'TEXT',
          //   label: 'ชื่อเล่น (ภาษาอังกฤษ)',
          //   required: true,
          // },
          // {
          //   key: 'tel',
          //   value: '0863435490',
          //   order: 1,
          //   group: 2,
          //   type: 'PHONE',
          //   label: 'เบอร์โทรศัพท์',
          //   required: true,
          // },
          // {
          //   key: 'email',
          //   value: 'new17353@gmail.com',
          //   order: 2,
          //   group: 2,
          //   type: 'EMAIL',
          //   label: 'อีเมล',
          //   required: true,
          // },
          // {
          //   key: 'emergencyTel',
          //   value: '0898163862',
          //   order: 3,
          //   group: 2,
          //   type: 'PHONE',
          //   label: 'เบอร์โทรศัพท์ฉุกเฉิน',
          //   required: true,
          // },
          // {
          //   key: 'emergencyRelationship',
          //   value: 'แม่',
          //   order: 4,
          //   group: 2,
          //   type: 'TEXT',
          //   label: 'มีความสัมพันธ์เป็น',
          //   required: true,
          // },
          // {
          //   key: 'line',
          //   value: '+7353',
          //   order: 5,
          //   group: 2,
          //   type: 'TEXT',
          //   label: 'LINE ID',
          //   required: true,
          // },
          // {
          //   key: 'facebook',
          //   value: 'new norapat',
          //   order: 6,
          //   group: 2,
          //   type: 'TEXT',
          //   label: 'Facebook',
          //   required: true,
          // },
        ],
      });
    });
    return response;
  }
  post<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    console.log(url, params);
    throw new Error('Method not implemented.');
  }
  put<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    console.log(url, params);
    throw new Error('Method not implemented.');
  }
  delete<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    console.log(url, params);
    throw new Error('Method not implemented.');
  }

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }
}
