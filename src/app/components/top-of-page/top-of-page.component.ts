import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent implements OnInit {
  isShown = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  @HostListener('window:scroll') onWindowScroll(): void {
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 50;
  }

  goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
