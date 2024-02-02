import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessAddressComponent } from './access-address.component';

describe('AccessAddressComponent', () => {
  let component: AccessAddressComponent;
  let fixture: ComponentFixture<AccessAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
