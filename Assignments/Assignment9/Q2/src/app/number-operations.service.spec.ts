import { TestBed } from '@angular/core/testing';

import { NumberOperationsService } from './number-operations.service';

describe('NumberOperationsService', () => {
  let service: NumberOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
