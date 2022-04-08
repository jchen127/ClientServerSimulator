import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairFacilityComponent } from './repair-facility.component';

describe('RepairFacilityComponent', () => {
  let component: RepairFacilityComponent;
  let fixture: ComponentFixture<RepairFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
