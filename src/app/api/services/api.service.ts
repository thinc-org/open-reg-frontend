/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserInfoDto } from '../models/user-info-dto';
import { CreateEventDTO } from '../models/create-event-dto';
import { EditEventDTO } from '../models/edit-event-dto';
import { SubmitResponseDTO } from '../models/submit-response-dto';
import { FormResponse } from '../models/form-response';
import { CreateFormDTO } from '../models/create-form-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getPingPath = '/ping';
  static readonly getUserProfilePath = '/user/profile';
  static readonly getUserFormPath = '/user/form';
  static readonly postUserFormPath = '/user/form';
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
  static readonly getChulaSsoValidateTicketPath = '/chula-sso/validate-ticket';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getPingResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ping`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getPing(): __Observable<null> {
    return this.getPingResponse().pipe(
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getUserProfile(): __Observable<null> {
    return this.getUserProfileResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  getUserFormResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/form`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getUserForm(): __Observable<null> {
    return this.getUserFormResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param UserInfoDto undefined
   */
  postUserFormResponse(UserInfoDto: UserInfoDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = UserInfoDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user/form`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param UserInfoDto undefined
   */
  postUserForm(UserInfoDto: UserInfoDto): __Observable<null> {
    return this.postUserFormResponse(UserInfoDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param CreateEventDTO undefined
   */
  postEventResponse(CreateEventDTO: CreateEventDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateEventDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/event`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
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
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/event`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getEvent(): __Observable<null> {
    return this.getEventResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.PatchEventIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `EditEventDTO`:
   */
  patchEventIdResponse(params: ApiService.PatchEventIdParams): __Observable<__StrictHttpResponse<null>> {
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
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
    return this.patchEventIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  getEventId(id: string): __Observable<null> {
    return this.getEventIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteEventId(id: string): __Observable<null> {
    return this.deleteEventIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  getResponseId(id: string): __Observable<null> {
    return this.getResponseIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param SubmitResponseDTO undefined
   */
  postResponseResponse(SubmitResponseDTO: SubmitResponseDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = SubmitResponseDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/response`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param SubmitResponseDTO undefined
   */
  postResponse(SubmitResponseDTO: SubmitResponseDTO): __Observable<null> {
    return this.postResponseResponse(SubmitResponseDTO).pipe(
      __map(_r => _r.body as null)
    );
  }
  getFormAllResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/form/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getFormAll(): __Observable<null> {
    return this.getFormAllResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  getFormIdResponse(id: string): __Observable<__StrictHttpResponse<FormResponse>> {
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FormResponse>;
      })
    );
  }
  /**
   * @param id undefined
   */
  getFormId(id: string): __Observable<FormResponse> {
    return this.getFormIdResponse(id).pipe(
      __map(_r => _r.body as FormResponse)
    );
  }

  /**
   * @param CreateFormDTO undefined
   */
  postFormResponse(CreateFormDTO: CreateFormDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateFormDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/form`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
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

  /**
   * @param ticket undefined
   */
  getChulaSsoValidateTicketResponse(ticket: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (ticket != null) __params = __params.set('ticket', ticket.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/chula-sso/validate-ticket`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param ticket undefined
   */
  getChulaSsoValidateTicket(ticket: string): __Observable<null> {
    return this.getChulaSsoValidateTicketResponse(ticket).pipe(
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

export { ApiService }
