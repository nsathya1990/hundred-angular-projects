import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit {
  @Input() totalItems = 1;
  @Input() pageSize = 25;
  @Input() currentPage = 1;
  @Input() step = 2;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  get totalPages(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isPreviousDisabled(): boolean {
    return this.currentPage - this.step < 1;
  }

  get isNextDisabled(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  get pages(): number[] {
    const pages = [];
    if (this.currentPage > 1) {
      pages.push(this.currentPage - 1);
    }

    pages.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      pages.push(this.currentPage + 1);
    }

    if (this.currentPage + 1 < this.totalPages) {
      pages.push(this.currentPage + 2);
    }

    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pages.push(this.currentPage + 3);
    }
    return pages;
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  constructor() {}

  ngOnInit(): void {}
}
