import { Injectable } from '@angular/core';
import { timer, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  CreateEventDTO,
  AddMemberDTO,
  CreateOrganizationDTO,
  CreateUserDTO,
} from 'src/backend-client';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  public forceBadRequest = false;

  private createMockApiResponse(
    data: Record<string, any> | Record<string, any>[],
    forceBadRequest: boolean
  ) {
    return timer(1000).pipe(
      switchMap(() =>
        forceBadRequest ? throwError(new HttpErrorResponse({ status: 400 })) : of(data)
      )
    );
  }

  constructor() {}

  eventControllerCreateEvent(body: CreateEventDTO) {
    return this.createMockApiResponse(
      {
        _id: '5ee4d592387493001b961a18',
        name: body.name,
        description: body.description,
        organizationID: body.organizationID,
        __v: 0,
      },
      this.forceBadRequest
    );
  }

  eventControllerFindAll() {
    return this.createMockApiResponse(
      [
        {
          _id: '5ee475d8a811fe001b208b51',
          name: 'Test Event 1',
          description: 'Suphon is very godlike',
          organizationID: '5ee475b4a811fe001b208b50',
          __v: 0,
        },
        {
          _id: '5ee4766ca811fe001b208b52',
          name: 'Test Event 2',
          description: 'Suphon is very intelligent',
          organizationID: '5ee475b4a811fe001b208b50',
          __v: 0,
        },
        {
          _id: '5ee4b4a8387493001b961a15',
          name: 'Test Event 3',
          description: 'Suphon is a quadrillionaire',
          organizationID: '5ee475b4a811fe001b208b50',
          __v: 0,
        },
      ],
      this.forceBadRequest
    );
  }

  eventControllerFindById(id: string) {
    return this.createMockApiResponse(
      {
        _id: id,
        name: 'Test Event 1',
        description: 'Suphon is very godlike',
        organizationID: '5ee475b4a811fe001b208b50',
        __v: 0,
      },
      this.forceBadRequest
    );
  }

  organizationControllerAddMember(body: AddMemberDTO) {
    return this.createMockApiResponse(
      [{ userID: body.memberid, permissions: [] }],
      this.forceBadRequest
    );
  }

  organizationControllerCreateOrganization(body: CreateOrganizationDTO) {
    return this.createMockApiResponse(
      {
        events: [],
        members: [],
        _id: '5ee4d9de387493001b961a3a',
        name: body.name,
        __v: 0,
      },
      this.forceBadRequest
    );
  }

  organizationControllerFindAll() {
    return this.createMockApiResponse(
      [
        {
          events: [],
          members: [],
          _id: '5ee475b4a811fe001b208b50',
          name: 'Suphon Corporation',
          __v: 0,
        },
        { events: [], members: [], _id: '5ee4d9de387493001b961a3a', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4d9de387493001b961a3b', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4d9f0387493001b961a3c', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4d9f0387493001b961a3d', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4d9fa387493001b961a3e', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4d9fa387493001b961a3f', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4d9fd387493001b961a40', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4d9fe387493001b961a41', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4d9ff387493001b961a42', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4da08387493001b961a43', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4da0b387493001b961a44', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4da51387493001b961a45', name: 'new company', __v: 0 },
        { events: [], members: [], _id: '5ee4da51387493001b961a46', name: 'new company', __v: 0 },
      ],
      this.forceBadRequest
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  organizationControllerGetMembers(orgid: string) {
    return this.createMockApiResponse(
      [{ userID: '5ee4da95387493001b961a47', permissions: [] }],
      this.forceBadRequest
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  organizationControllerRemoveMember(orgid: string) {
    return this.createMockApiResponse(
      [{ userID: '5ee4da95387493001b961a47', permissions: [] }],
      this.forceBadRequest
    );
  }

  userControllerCreate(body: CreateUserDTO) {
    return this.createMockApiResponse(
      {
        organizations: [],
        termsOfService: [],
        _id: '5ee4db6b387493001b961a53',
        title: { _id: '5ee4db6b387493001b961a54', ...body.title },
        firstName: { _id: '5ee4db6b387493001b961a55', ...body.firstName },
        lastName: { _id: '5ee4db6b387493001b961a56', ...body.lastName },
        dateOfBirth: body.dateOfBirth.toISOString(),
        email: body.email,
        password: '$2a$10$phBx91fXC5t37UdF1x3Hyuv3KT/XmDmiF.kSKdtXICqfUAwfSynO.',
        __v: 0,
      },
      this.forceBadRequest
    );
  }

  userControllerFindAll() {
    return this.createMockApiResponse(
      [
        {
          organizations: [],
          termsOfService: [],
          _id: '5ee4da95387493001b961a47',
          title: { _id: '5ee4da95387493001b961a48', en: 'new', th: 'new' },
          firstName: { _id: '5ee4da95387493001b961a49', en: 'new', th: 'new' },
          lastName: { _id: '5ee4da95387493001b961a4a', en: 'new', th: 'new' },
          dateOfBirth: '2020-06-13T13:54:29.808Z',
          email: 'new.com',
          password: '$2a$10$CESfxmv4C0/N/xXobO.O5OAYD3eUQfSeRx.NGSWM3LvwUhqY8p3N6',
          __v: 0,
        },
        {
          organizations: [],
          termsOfService: [],
          _id: '5ee4db6b387493001b961a53',
          title: { _id: '5ee4db6b387493001b961a54', en: 'new', th: 'new' },
          firstName: { _id: '5ee4db6b387493001b961a55', en: 'new', th: 'new' },
          lastName: { _id: '5ee4db6b387493001b961a56', en: 'new', th: 'new' },
          dateOfBirth: '2020-06-13T13:58:03.469Z',
          email: 'new.comd',
          password: '$2a$10$phBx91fXC5t37UdF1x3Hyuv3KT/XmDmiF.kSKdtXICqfUAwfSynO.',
          __v: 0,
        },
      ],
      this.forceBadRequest
    );
  }

  userControllerFindById(id: string) {
    return this.createMockApiResponse(
      {
        organizations: [],
        termsOfService: [],
        _id: id,
        title: { _id: '5ee4da95387493001b961a48', en: 'new', th: 'new' },
        firstName: { _id: '5ee4da95387493001b961a49', en: 'new', th: 'new' },
        lastName: { _id: '5ee4da95387493001b961a4a', en: 'new', th: 'new' },
        dateOfBirth: '2020-06-13T13:54:29.808Z',
        email: 'new.com',
        password: '$2a$10$CESfxmv4C0/N/xXobO.O5OAYD3eUQfSeRx.NGSWM3LvwUhqY8p3N6',
        __v: 0,
      },
      this.forceBadRequest
    );
  }
}
