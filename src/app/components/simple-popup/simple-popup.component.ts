import { Component, Input, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { fadeInOutAnimation } from '../../others/animations/fade-in-out/fade-in-out.animation';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss'],
  animations: [fadeInOutAnimation],
})
export class SimplePopupComponent implements OnInit {
  @Input() message = '';
  isShown = false;

  constructor() {}

  ngOnInit(): void {}

  show(): void {
    this.isShown = true;

    const subscription$: Subscription = of(null)
      .pipe(delay(3000))
      .subscribe({
        complete: () => {
          this.isShown = false;
          subscription$.unsubscribe();
        },
      });
  }
}
