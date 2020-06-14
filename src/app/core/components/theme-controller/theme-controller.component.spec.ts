import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeControllerComponent } from './theme-controller.component';

describe('ThemeControllerComponent', () => {
  let component: ThemeControllerComponent;
  let fixture: ComponentFixture<ThemeControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeControllerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
