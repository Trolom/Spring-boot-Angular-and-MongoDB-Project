import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeActiveComponent } from './time-active.component';

describe('TimeActiveComponent', () => {
  let component: TimeActiveComponent;
  let fixture: ComponentFixture<TimeActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeActiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
