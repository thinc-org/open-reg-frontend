import { TestBed } from '@angular/core/testing';

import { FormGeneratorService } from './form-generator.service';

describe('FormGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormGeneratorService = TestBed.get(FormGeneratorService);
    expect(service).toBeTruthy();
  });
});
