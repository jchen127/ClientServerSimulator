import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetainJuvenileComponent } from './detain-juvenile.component';

describe('DetainJuvenileComponent', () => {
  let component: DetainJuvenileComponent;
  let fixture: ComponentFixture<DetainJuvenileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetainJuvenileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetainJuvenileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
