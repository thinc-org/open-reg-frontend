/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CreateUserDTO } from '../models/create-user-dto';
import { CreateEventDTO } from '../models/create-event-dto';
import { EditEventDTO } from '../models/edit-event-dto';
import { CreateResponseDTO } from '../models/create-response-dto';
import { CreateFormDTO } from '../models/create-form-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getPingPath = '/ping';
  static readonly postLoginPath = '/login';
  static readonly postSignupPath = '/signup';
  static readonly getUserProfilePath = '/user/profile';
  static readonly postEventPath = '/event';
  static readonly getEventPath = '/event';
  static readonly patchEventIdPath = '/event/{id}';
  static readonly getEventIdPath = '/event/{id}';
  static readonly deleteEventIdPath = '/event/{id}';
  static readonly getResponseIdPath = '/response/{id}';
  static readonly postResponsePath = '/response';
  static readonly getFormAllPath = '/form/all';
  static readonly getFormIdPath = '/form/{id}';
  static readonly postFormPath = '/form';

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }
  getPingResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>('GET', this.rootUrl + `/ping`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  getPing(): __Observable<null> {
    return this.getPingResponse().pipe(__map(_r => _r.body as null));
  }
  postLoginResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>('POST', this.rootUrl + `/login`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  postLogin(): __Observable<null> {
    return this.postLoginResponse().pipe(__map(_r => _r.body as null));
  }

  /**
   * @param CreateUserDTO undefined
   */
  postSignupResponse(
    CreateUserDTO: CreateUserDTO
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateUserDTO;
    let req = new HttpRequest<any>('POST', this.rootUrl + `/signup`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param CreateUserDTO undefined
   */
  postSignup(CreateUserDTO: CreateUserDTO): __Observable<null> {
    return this.postSignupResponse(CreateUserDTO).pipe(
      __map(_r => _r.body as null)
    );
  }
  getUserProfileResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/profile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  getUserProfile(): __Observable<null> {
    return this.getUserProfileResponse().pipe(__map(_r => _r.body as null));
  }

  /**
   * @param CreateEventDTO undefined
   */
  postEventResponse(
    CreateEventDTO: CreateEventDTO
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateEventDTO;
    let req = new HttpRequest<any>('POST', this.rootUrl + `/event`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param CreateEventDTO undefined
   */
  postEvent(CreateEventDTO: CreateEventDTO): __Observable<null> {
    return this.postEventResponse(CreateEventDTO).pipe(
      __map(_r => _r.body as null)
    );
  }
  getEventResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>('GET', this.rootUrl + `/event`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  getEvent(): __Observable<null> {
    return this.getEventResponse().pipe(__map(_r => _r.body as null));
  }

  /**
   * @param params The `ApiService.PatchEventIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `EditEventDTO`:
   */
  patchEventIdResponse(
    params: ApiService.PatchEventIdParams
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.EditEventDTO;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/event/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ApiService.PatchEventIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `EditEventDTO`:
   */
  patchEventId(params: ApiService.PatchEventIdParams): __Observable<null> {
    return this.patchEventIdResponse(params).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param id undefined
   */
  getEventIdResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/event/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  getEventId(id: string): __Observable<null> {
    return this.getEventIdResponse(id).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param id undefined
   */
  deleteEventIdResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/event/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteEventId(id: string): __Observable<null> {
    return this.deleteEventIdResponse(id).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param id undefined
   */
  getResponseIdResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/response/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  getResponseId(id: string): __Observable<null> {
    return this.getResponseIdResponse(id).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param CreateResponseDTO undefined
   */
  postResponseResponse(
    CreateResponseDTO: CreateResponseDTO
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateResponseDTO;
    let req = new HttpRequest<any>('POST', this.rootUrl + `/response`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param CreateResponseDTO undefined
   */
  postResponse(CreateResponseDTO: CreateResponseDTO): __Observable<null> {
    return this.postResponseResponse(CreateResponseDTO).pipe(
      __map(_r => _r.body as null)
    );
  }
  getFormAllResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>('GET', this.rootUrl + `/form/all`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  getFormAll(): __Observable<null> {
    return this.getFormAllResponse().pipe(__map(_r => _r.body as null));
  }

  /**
   * @param id undefined
   */
  getFormIdResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/form/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  getFormId(id: string): __Observable<null> {
    return this.getFormIdResponse(id).pipe(__map(_r => _r.body as null));
  }

  /**
   * @param CreateFormDTO undefined
   */
  postFormResponse(
    CreateFormDTO: CreateFormDTO
  ): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateFormDTO;
    let req = new HttpRequest<any>('POST', this.rootUrl + `/form`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param CreateFormDTO undefined
   */
  postForm(CreateFormDTO: CreateFormDTO): __Observable<null> {
    return this.postFormResponse(CreateFormDTO).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ApiService {
  /**
   * Parameters for patchEventId
   */
  export interface PatchEventIdParams {
    id: string;
    EditEventDTO: EditEventDTO;
  }
}

export { ApiService };
