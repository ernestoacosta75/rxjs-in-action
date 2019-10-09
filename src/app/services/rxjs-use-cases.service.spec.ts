import { TestBed } from '@angular/core/testing';

import { RxjsUseCasesService } from './rxjs-use-cases.service';

describe('RxjsUseCasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsUseCasesService = TestBed.get(RxjsUseCasesService);
    expect(service).toBeTruthy();
  });
});
