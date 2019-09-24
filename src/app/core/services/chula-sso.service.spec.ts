import { TestBed } from '@angular/core/testing';

import { ChulaSsoService } from './chula-sso.service';

describe('ChulaSsoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChulaSsoService = TestBed.get(ChulaSsoService);
    expect(service).toBeTruthy();
  });
});
