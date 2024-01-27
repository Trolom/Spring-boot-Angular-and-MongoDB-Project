import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorMaintenanceComponent } from './sensor-maintenance.component';

describe('SensorMaintenanceComponent', () => {
  let component: SensorMaintenanceComponent;
  let fixture: ComponentFixture<SensorMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SensorMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SensorMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
