import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent implements OnInit {
  @Input() searchTerm = '';
  @Input() placeholder = 'Search';
  @Output() searchUpdate = new EventEmitter<string>();

  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$
      .pipe(debounceTime(500), distinctUntilChanged())
      // tslint:disable-next-line: deprecation
      .subscribe(
        (value) => this.searchUpdate.emit(value),
        (error) => console.error(error)
      );
  }

  ngOnInit(): void {}

  updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }
}
