import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  const MOCK_INPUT = 'mock input';
  let onChangeSpy: jasmine.Spy<() => void>;
  let eventEmitterSpy: jasmine.Spy<() => void>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    onChangeSpy = spyOn(component, 'onChange').and.callThrough();
    eventEmitterSpy = spyOn(component.onchange, 'emit');
  });

  afterEach(() => {
    onChangeSpy.calls.reset();
    eventEmitterSpy.calls.reset();
  });

  it('should create with no input', () => {
    const container = fixture.nativeElement.querySelector('.search');
    const icon = container.children[0];
    const input = container.children[1];

    expect(container.classList).toContain('search');
    expect(icon.classList).toContain('search-icon');
    expect(icon.textContent).toMatch('search');
    expect(input.classList).toContain('search-input');
    expect(input.placeholder).toMatch('search...');
    expect(input.value).toMatch('');
  });

  it('should cahnge value with input props', () => {
    component.input = MOCK_INPUT;
    fixture.detectChanges();

    const container = fixture.nativeElement.querySelector('.search');
    const input = container.children[1];

    expect(input.value).toMatch(MOCK_INPUT);
  });

  it('should emit onchange event when input change', () => {
    const container = fixture.nativeElement.querySelector('.search');
    const input = container.children[1];

    input.value = MOCK_INPUT;
    const MOCK_EVENT = new Event('input');
    input.dispatchEvent(MOCK_EVENT);

    expect(onChangeSpy).toHaveBeenCalledWith(MOCK_EVENT);
    expect(eventEmitterSpy).toHaveBeenCalledWith(MOCK_INPUT);
  });
});
