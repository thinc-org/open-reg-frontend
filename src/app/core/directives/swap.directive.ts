import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appSwap]',
})
export class SwapDirective implements AfterViewInit {
  @Input() isSwapped = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const order = this.isSwapped ? [1, 2] : [2, 1];
    if (this.getChild(0) && this.getChild(1)) {
      this.renderer.setStyle(this.getChild(0), 'order', order[0]);
      this.renderer.setStyle(this.getChild(1), 'order', order[1]);
    }
  }

  getChild(i: number) {
    return this.elementRef.nativeElement.children[i];
  }
}
