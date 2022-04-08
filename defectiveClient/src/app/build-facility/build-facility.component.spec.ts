import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildFacilityComponent } from './build-facility.component';

describe('BuildFacilityComponent', () => {
  let component: BuildFacilityComponent;
  let fixture: ComponentFixture<BuildFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
