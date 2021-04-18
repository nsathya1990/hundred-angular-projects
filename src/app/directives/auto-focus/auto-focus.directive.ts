import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements AfterContentInit {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 250);
  }
}
