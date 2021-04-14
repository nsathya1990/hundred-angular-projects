import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]',
})
export class ScaleDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseover') mouseover(): void {
    this.elementRef.nativeElement.style.transition = 'all .3s';
    this.elementRef.nativeElement.style.transform = 'scale(1.25)';
  }

  @HostListener('mouseout') mouseout(): void {
    this.elementRef.nativeElement.style.transform = 'scale(1)';
  }
}
