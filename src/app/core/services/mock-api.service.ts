/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { timer, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  CreateEventDTO,
  AddMemberDTO,
  CreateOrganizationDTO,
  CreateUserDTO,
  ApiServiceInterface,
  OrganizationMember,
  Organization,
  Configuration,
  SetTagsDTO,
  AuthSignInDTO,
  AuthToken,
  UserDTO,
} from 'backend-client';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Event } from 'backend-client/model/event';

@Injectable({
  providedIn: 'root',
})
export class MockApiService implements ApiServiceInterface {
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
    return this.createMockApiResponse<UserDTO>({
      organizations: [],
      termsOfService: [],
      id: '5ee4da95387493001b961a47',
      title: { en: 'new', th: 'new' },
      firstName: { en: 'new', th: 'new' },
      lastName: { en: 'new', th: 'new' },
      dateOfBirth: '2020-06-13T13:54:29.808Z',
      email: 'new.com',
    });
  }

  authControllerLogin(body: AuthSignInDTO) {
    return this.createMockApiResponse<AuthToken>({ accessToken: 'token' });
  }

  eventControllerCreateEvent(body: CreateEventDTO) {
    return this.createMockApiResponse<Event>({
      name: body.name,
      description: body.description,
      organizationID: body.organizationID,
      tags: ['name1'],
      startDate: new Date(),
      endDate: new Date(),
    });
  }

  eventControllerFindAll() {
    return this.createMockApiResponse<Event[]>([
      {
        name: 'Test Event 1',
        description: 'Suphon is very godlike',
        organizationID: '5ee475b4a811fe001b208b50',
        tags: ['name1'],
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        name: 'Test Event 2',
        description: 'Suphon is very intelligent',
        organizationID: '5ee475b4a811fe001b208b50',
        tags: ['name1'],
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        name: 'Test Event 3',
        description: 'Suphon is a quadrillionaire',
        organizationID: '5ee475b4a811fe001b208b50',
        tags: ['name2'],
        startDate: new Date(),
        endDate: new Date(),
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
      tags: ['name1'],
      startDate: ('2020-06-13T13:54:29.808Z' as unknown) as Date,
      endDate: ('2020-06-13T13:54:29.808Z' as unknown) as Date,
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
      dateOfBirth: body.dateOfBirth.toISOString(),
      email: body.email,
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
        dateOfBirth: '2020-06-13T13:54:29.808Z',
        email: 'new.com',
      },
      {
        organizations: [],
        termsOfService: [],
        id: '5ee4db6b387493001b961a53',
        title: { en: 'new', th: 'new' },
        firstName: { en: 'new', th: 'new' },
        lastName: { en: 'new', th: 'new' },
        dateOfBirth: '2020-06-13T13:58:03.469Z',
        email: 'new.comd',
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
      dateOfBirth: '2020-06-13T13:54:29.808Z',
      email: 'new.com',
    });
  }
}
