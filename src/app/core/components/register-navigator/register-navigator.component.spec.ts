import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNavigatorComponent } from './register-navigator.component';

describe('RegisterNavigatorComponent', () => {
  let component: RegisterNavigatorComponent;
  let fixture: ComponentFixture<RegisterNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterNavigatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
