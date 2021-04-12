import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRipple]',
})
export class RippleDirective {
  @Input() appRipple = 'ripple';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @HostListener('mouseenter') onHover(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, this.appRipple);
  }
}
