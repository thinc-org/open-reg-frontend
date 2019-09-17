import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendSuccessComponent } from './attend-success.component';

describe('AttendSuccessComponent', () => {
  let component: AttendSuccessComponent;
  let fixture: ComponentFixture<AttendSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
