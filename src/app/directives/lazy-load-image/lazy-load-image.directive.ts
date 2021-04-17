import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImage]',
})
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy {
  constructor(
    @Inject('Window') private window: Window,
    private elementRef: ElementRef
  ) {}

  @HostBinding('attr.src') srcAttribute = null;
  @Input() src: string;
  observer: IntersectionObserver;

  ngAfterViewInit(): void {
    console.log(this.canLazyLoad());
    if (this.canLazyLoad()) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            this.loadImage();
            this.observer.unobserve(this.elementRef.nativeElement);
          }
        });
      });
      this.observer.observe(this.elementRef.nativeElement);
    } else {
      this.loadImage();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private loadImage(): void {
    this.srcAttribute = this.src;
  }

  private canLazyLoad(): boolean {
    return this.window && this.window.hasOwnProperty('IntersectionObserver');
  }
}
