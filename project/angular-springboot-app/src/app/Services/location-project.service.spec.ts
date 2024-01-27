import { TestBed } from '@angular/core/testing';

import { LocationProjectService } from './location-project.service';

describe('LocationProjectService', () => {
  let service: LocationProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
