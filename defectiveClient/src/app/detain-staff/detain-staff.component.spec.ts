import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetainStaffComponent } from './detain-staff.component';

describe('DetainStaffComponent', () => {
  let component: DetainStaffComponent;
  let fixture: ComponentFixture<DetainStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetainStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetainStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
