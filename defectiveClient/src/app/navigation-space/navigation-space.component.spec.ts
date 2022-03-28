import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSpaceComponent } from './navigation-space.component';

describe('NavigationSpaceComponent', () => {
  let component: NavigationSpaceComponent;
  let fixture: ComponentFixture<NavigationSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
