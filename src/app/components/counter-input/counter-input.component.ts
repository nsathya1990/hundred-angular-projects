import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent implements OnInit {
  @Input() counter = 0;
  @Input() min = 0;
  @Input() max = Number.MAX_SAFE_INTEGER;

  constructor() {}

  ngOnInit(): void {}

  minusOne(): void {
    if (this.min < this.counter) {
      this.counter--;
    }
  }

  addOne(): void {
    if (this.max > this.counter) {
      this.counter++;
    }
  }
}
