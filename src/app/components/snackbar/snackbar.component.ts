import { Component, Input, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  @Input() message = '';
  isShown = false;

  constructor() {}

  ngOnInit(): void {}

  show(): void {
    this.isShown = true;

    const subscription: Subscription = of(null)
      .pipe(delay(2900))
      .subscribe({
        complete: () => {
          this.isShown = false;
          subscription.unsubscribe();
        },
      });
  }
}
