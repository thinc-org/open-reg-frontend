import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmContentComponent } from './confirm-content.component';

describe('ConfirmContentComponent', () => {
  let component: ConfirmContentComponent;
  let fixture: ComponentFixture<ConfirmContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
