import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {
  @Input() totalPages: any;
  @Input() currentPage: any;
  @Output() pageChanged = new EventEmitter<number>();

  get pages(): number[] {
    const pages = [];
    if (this.totalPages <= 10) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 6) {
        for (let i = 1; i <= 8; i++) {
          pages.push(i);
        }
        pages.push(-1); // ellipsis
        pages.push(this.totalPages);
      } else if (this.currentPage > this.totalPages - 6) {
        pages.push(1);
        pages.push(-1); // ellipsis
        for (let i = this.totalPages - 7; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1); // ellipsis
        for (let i = this.currentPage - 3; i <= this.currentPage + 3; i++) {
          pages.push(i);
        }
        pages.push(-1); // ellipsis
        pages.push(this.totalPages);
      }
    }
    return pages;
  }

  onPageChange(page: number): void {
    if (page !== -1 && page !== this.currentPage) {
      this.pageChanged.emit(page);
    }
  }
}

