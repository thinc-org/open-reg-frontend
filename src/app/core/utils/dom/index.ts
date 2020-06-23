import { ElementRef } from '@angular/core';

export const getCompleteWidth = (el?: ElementRef<any>) => {
  const element = el?.nativeElement;
  if (element === undefined) {
    return 0;
  }
  const style = element.currentStyle || window.getComputedStyle(element);
  const { offsetWidth } = element;
  const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  return offsetWidth + margin;
};

export const getPadding = (el?: ElementRef<any>) => {
  const element = el?.nativeElement;
  if (element === undefined) {
    return 0;
  }
  const style = element.currentStyle || window.getComputedStyle(element);
  const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  return padding;
};
