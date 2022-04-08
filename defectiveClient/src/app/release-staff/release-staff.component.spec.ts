import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseStaffComponent } from './release-staff.component';

describe('ReleaseStaffComponent', () => {
  let component: ReleaseStaffComponent;
  let fixture: ComponentFixture<ReleaseStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
