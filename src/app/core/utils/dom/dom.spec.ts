import { ElementRef } from '@angular/core';
import { getCompleteWidth, getPadding } from '.';

describe('getCompleteWidth', () => {
  it('should getCompleteWidth correctly', () => {
    const MOCK_ELEMENT = {
      nativeElement: {
        offsetWidth: 100,
        currentStyle: { marginLeft: '10px', marginRight: '10px' },
      },
    };
    const result = getCompleteWidth(MOCK_ELEMENT);
    expect(result).toBe(120);

    const MOCK_ELEMENT2 = {} as ElementRef;
    const result2 = getCompleteWidth(MOCK_ELEMENT2);
    expect(result2).toBe(0);
  });
});

describe('getPadding', () => {
  it('should getPadding correctly', () => {
    const MOCK_ELEMENT = {
      nativeElement: {
        currentStyle: { paddingLeft: '10px', paddingRight: '10px' },
      },
    };
    const result = getPadding(MOCK_ELEMENT);
    expect(result).toBe(20);

    const MOCK_ELEMENT2 = {} as ElementRef;
    const result2 = getPadding(MOCK_ELEMENT2);
    expect(result2).toBe(0);
  });
});
