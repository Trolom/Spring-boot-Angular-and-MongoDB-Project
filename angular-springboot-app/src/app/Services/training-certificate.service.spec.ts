import { TestBed } from '@angular/core/testing';

import { TrainingCertificateService } from './training-certificate.service';

describe('TrainingCertificateService', () => {
  let service: TrainingCertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingCertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
