import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowTextComponent } from './arrow-text.component';

describe('ArrowTextComponent', () => {
  let component: ArrowTextComponent;
  let fixture: ComponentFixture<ArrowTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowTextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
