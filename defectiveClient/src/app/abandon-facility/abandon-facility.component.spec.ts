import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonFacilityComponent } from './abandon-facility.component';

describe('AbandonFacilityComponent', () => {
  let component: AbandonFacilityComponent;
  let fixture: ComponentFixture<AbandonFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbandonFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbandonFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
