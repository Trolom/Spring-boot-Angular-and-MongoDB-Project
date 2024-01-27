import { TestBed } from '@angular/core/testing';

import { TimeActiveService } from './time-active.service';

describe('TimeActiveService', () => {
  let service: TimeActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
