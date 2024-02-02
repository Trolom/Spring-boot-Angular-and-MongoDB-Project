import { TestBed } from '@angular/core/testing';

import { SensorMaintenanceService } from './sensor-maintenance.service';

describe('SensorMaintenanceService', () => {
  let service: SensorMaintenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorMaintenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
