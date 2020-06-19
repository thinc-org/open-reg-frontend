/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { timer, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  CreateEventDTO,
  AddMemberDTO,
  CreateOrganizationDTO,
  CreateUserDTO,
  DefaultServiceInterface,
  OrganizationMember,
  Organization,
  UserDTO,
  Configuration,
  SetTagsDTO,
} from 'src/backend-client';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Event } from 'src/backend-client/model/event';

@Injectable({
  providedIn: 'root',
})
export class MockApiService implements DefaultServiceInterface {
  public forceBadRequest = false;
  defaultHeaders = new HttpHeaders();
  configuration = new Configuration();

  private createMockApiResponse<T>(data: T) {
    return timer(1000).pipe(
      switchMap(() =>
        this.forceBadRequest ? throwError(new HttpErrorResponse({ status: 400 })) : of(data)
      )
    );
  }

  constructor() {}

  authControllerCurrentUser() {
    return this.createMockApiResponse<any>([]);
  }

  authControllerLogin() {
    return this.createMockApiResponse<any>([]);
  }

  // find tag
  eventControllerCreateEvent(body: CreateEventDTO) {
    return this.createMockApiResponse<Event>({
      name: body.name,
      description: body.description,
      organizationID: body.organizationID,
      tags: ['?'],
    });
  }

  // find tag
  eventControllerFindAll() {
    return this.createMockApiResponse<Event[]>([
      {
        name: 'Test Event 1',
        description: 'Suphon is very godlike',
        organizationID: '5ee475b4a811fe001b208b50',
        tags: ['?'],
      },
      {
        name: 'Test Event 2',
        description: 'Suphon is very intelligent',
        organizationID: '5ee475b4a811fe001b208b50',
        tags: ['?'],
      },
      {
        name: 'Test Event 3',
        description: 'Suphon is a quadrillionaire',
        organizationID: '5ee475b4a811fe001b208b50',
        tags: ['?'],
      },
    ]);
  }

  eventControllerFindAllTags(id: string) {
    return this.createMockApiResponse<string[]>(['?']);
  }

  eventControllerFindById(id: string) {
    return this.createMockApiResponse<Event>({
      name: 'Test Event 1',
      description: 'Suphon is very godlike',
      organizationID: '5ee475b4a811fe001b208b50',
      tags: ['?'],
    });
  }

  eventControllerSetTags(body: SetTagsDTO, id: string) {
    return this.createMockApiResponse<string[]>(body.tags);
  }

  organizationControllerAddMember(body: AddMemberDTO) {
    return this.createMockApiResponse<OrganizationMember[]>([
      { userID: body.memberid, permissions: [] },
    ]);
  }

  organizationControllerCreateOrganization(body: CreateOrganizationDTO) {
    return this.createMockApiResponse<Organization>({
      events: [],
      members: [],
      name: body.name,
    });
  }

  organizationControllerFindAll() {
    return this.createMockApiResponse<Organization[]>([
      {
        events: [],
        members: [],
        name: 'Suphon Corporation',
      },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
      { events: [], members: [], name: 'new company' },
    ]);
  }

  organizationControllerGetMembers(id: string) {
    return this.createMockApiResponse<OrganizationMember[]>([
      { userID: '5ee4da95387493001b961a47', permissions: [] },
    ]);
  }

  organizationControllerRemoveMember(id: string) {
    return this.createMockApiResponse<OrganizationMember[]>([
      { userID: '5ee4da95387493001b961a47', permissions: [] },
    ]);
  }

  userControllerCreate(body: CreateUserDTO) {
    return this.createMockApiResponse<UserDTO>({
      id: '5ee4da95387493001b961a47',
      organizations: [],
      termsOfService: [],
      title: body.title,
      firstName: body.firstName,
      lastName: body.lastName,
      dateOfBirth: (body.dateOfBirth.toISOString() as unknown) as Date,
      email: body.email,
      password: '$2a$10$phBx91fXC5t37UdF1x3Hyuv3KT/XmDmiF.kSKdtXICqfUAwfSynO.',
    });
  }

  userControllerFindAll() {
    return this.createMockApiResponse<UserDTO[]>([
      {
        organizations: [],
        termsOfService: [],
        id: '5ee4da95387493001b961a47',
        title: { en: 'new', th: 'new' },
        firstName: { en: 'new', th: 'new' },
        lastName: { en: 'new', th: 'new' },
        dateOfBirth: ('2020-06-13T13:54:29.808Z' as unknown) as Date,
        email: 'new.com',
        password: '$2a$10$CESfxmv4C0/N/xXobO.O5OAYD3eUQfSeRx.NGSWM3LvwUhqY8p3N6',
      },
      {
        organizations: [],
        termsOfService: [],
        id: '5ee4db6b387493001b961a53',
        title: { en: 'new', th: 'new' },
        firstName: { en: 'new', th: 'new' },
        lastName: { en: 'new', th: 'new' },
        dateOfBirth: ('2020-06-13T13:58:03.469Z' as unknown) as Date,
        email: 'new.comd',
        password: '$2a$10$phBx91fXC5t37UdF1x3Hyuv3KT/XmDmiF.kSKdtXICqfUAwfSynO.',
      },
    ]);
  }

  userControllerFindById(id: string) {
    return this.createMockApiResponse<UserDTO>({
      organizations: [],
      termsOfService: [],
      id,
      title: { en: 'new', th: 'new' },
      firstName: { en: 'new', th: 'new' },
      lastName: { en: 'new', th: 'new' },
      dateOfBirth: ('2020-06-13T13:54:29.808Z' as unknown) as Date,
      email: 'new.com',
      password: '$2a$10$CESfxmv4C0/N/xXobO.O5OAYD3eUQfSeRx.NGSWM3LvwUhqY8p3N6',
    });
  }
}
