import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeJuvenileComponent } from './intake-juvenile.component';

describe('IntakeJuvenileComponent', () => {
  let component: IntakeJuvenileComponent;
  let fixture: ComponentFixture<IntakeJuvenileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeJuvenileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeJuvenileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
