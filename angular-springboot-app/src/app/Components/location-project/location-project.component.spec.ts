import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationProjectComponent } from './location-project.component';

describe('LocationProjectComponent', () => {
  let component: LocationProjectComponent;
  let fixture: ComponentFixture<LocationProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
