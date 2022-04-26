import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationregisterComponent } from './navigationregister.component';

describe('NavigationregisterComponent', () => {
  let component: NavigationregisterComponent;
  let fixture: ComponentFixture<NavigationregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
