import { Component, Input, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  @Input() message = '';
  isShown = false;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.snackbarService.snackbar$.subscribe((value) => {
      this.showMessage(value);
    });
  }

  showMessage(message: string): void {
    this.isShown = true;
    this.message = message;

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
