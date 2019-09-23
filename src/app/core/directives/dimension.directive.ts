import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[dimension]'
})
export class DimensionDirective implements AfterViewInit{
  ngAfterViewInit(){
    let style = this.el.nativeElement.children[0].style;
    style.height = `${this.height}px`;
    style.width = `${this.width}px`;
  }
  @Input() height: number;
  @Input() width: number;
  constructor(private el : ElementRef)  {
  }

}
