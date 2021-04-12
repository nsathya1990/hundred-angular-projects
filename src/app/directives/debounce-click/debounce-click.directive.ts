import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  clicks = new Subject();
  subscription: Subscription;
  @Output() debounceClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    const debounceTimeInMs = 500;

    this.subscription = this.clicks
      .pipe(debounceTime(debounceTimeInMs))
      .subscribe((value: any) => this.debounceClick.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }
}
