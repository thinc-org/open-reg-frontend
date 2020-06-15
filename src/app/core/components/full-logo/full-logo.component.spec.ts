import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLogoComponent } from './full-logo.component';

describe('FullLogoComponent', () => {
  let component: FullLogoComponent;
  let fixture: ComponentFixture<FullLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullLogoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
