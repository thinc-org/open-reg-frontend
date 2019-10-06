import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDimension]',
})
export class DimensionDirective implements AfterViewInit {
  @Input() height: number;
  @Input() width: number;
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const style = this.el.nativeElement.children[0].style;
    style.height = `${this.height}px`;
    style.width = `${this.width}px`;
  }
}
