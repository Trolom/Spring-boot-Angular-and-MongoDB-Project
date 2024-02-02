import { TestBed } from '@angular/core/testing';

import { AccessAddressService } from './access-address.service';

describe('AccessAddressService', () => {
  let service: AccessAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
