import { TestBed } from '@angular/core/testing';

import { OperatorPipelinesWAggregatesService } from './operator-pipelines-waggregates.service';

describe('OperatorPipelinesWAggregatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperatorPipelinesWAggregatesService = TestBed.get(OperatorPipelinesWAggregatesService);
    expect(service).toBeTruthy();
  });
});
