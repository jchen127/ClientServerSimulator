import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseJuvenileComponent } from './release-juvenile.component';

describe('ReleaseJuvenileComponent', () => {
  let component: ReleaseJuvenileComponent;
  let fixture: ComponentFixture<ReleaseJuvenileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseJuvenileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseJuvenileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
