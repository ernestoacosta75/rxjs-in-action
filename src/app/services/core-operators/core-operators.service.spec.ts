import { TestBed } from '@angular/core/testing';

import { CoreOperatorsService } from './core-operators.service';

describe('CoreOperatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreOperatorsService = TestBed.get(CoreOperatorsService);
    expect(service).toBeTruthy();
  });
});
