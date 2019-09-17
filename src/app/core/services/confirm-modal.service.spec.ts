import { TestBed } from '@angular/core/testing';

import { ConfirmModalService } from './confirm-modal.service';

describe('ConfirmModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmModalService = TestBed.get(ConfirmModalService);
    expect(service).toBeTruthy();
  });
});
