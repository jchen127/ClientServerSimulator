import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicateJuvenileComponent } from './judicate-juvenile.component';

describe('JudicateJuvenileComponent', () => {
  let component: JudicateJuvenileComponent;
  let fixture: ComponentFixture<JudicateJuvenileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudicateJuvenileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JudicateJuvenileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
