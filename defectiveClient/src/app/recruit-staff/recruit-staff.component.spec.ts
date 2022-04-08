import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitStaffComponent } from './recruit-staff.component';

describe('RecruitStaffComponent', () => {
  let component: RecruitStaffComponent;
  let fixture: ComponentFixture<RecruitStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
