import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() itemsPerPage = 2;
  @Output() pageChange = new EventEmitter<number>();
  currentPage = 0;
  startPage = 0;
  lastPageNumberToDisplay = 0;

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.calculateLastPageNumberToDisplay();
  }

  get maxPage() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  get maxPageArray() {
    return [].constructor(this.maxPage);
  }

  calculateLastPageNumberToDisplay() {
    const FIRST_PAGE_WIDTH = 57;
    const EACH_PAGE_WIDTH = 59.4;
    const PAGE_BUTTON_WIDTH = 72;
    const PAGINATION_PADDING = 30;
    const lastPageToDisplay =
      Math.floor(
        (this.width - PAGINATION_PADDING - PAGE_BUTTON_WIDTH * 2 - FIRST_PAGE_WIDTH) /
          EACH_PAGE_WIDTH
      ) - 1;
    this.lastPageNumberToDisplay = lastPageToDisplay;
  }

  get width() {
    return this.el.nativeElement.children[0].offsetWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateLastPageNumberToDisplay();
    this.adjustStartPage(true);
  }

  changePage(page: number) {
    if (page >= 0 && page < this.maxPage) {
      const isPageUp = page > this.currentPage;
      this.currentPage = page;
      this.pageChange.emit(page);
      this.adjustStartPage(isPageUp);
    }
  }

  private adjustStartPage(isPageUp: boolean) {
    const isMoreThanLastPage = this.lastPageNumberToDisplay + this.startPage < this.currentPage + 1;
    const isMaxPage = this.currentPage === this.maxPage - 1;
    const isLessThanStartPage = this.startPage > this.currentPage;
    if (isPageUp && isMoreThanLastPage && !isMaxPage) {
      this.startPage = this.currentPage;
    } else if ((!isPageUp && isLessThanStartPage) || isMaxPage) {
      this.startPage = this.currentPage + 1 - this.lastPageNumberToDisplay;
    }
    this.cdr.detectChanges();
  }

  shouldShow(page: number) {
    const isLessThanPageToDisplay = page < this.lastPageNumberToDisplay + this.startPage;
    const isMoreThanStartPage = page >= this.startPage;
    return (isLessThanPageToDisplay && isMoreThanStartPage) || page === this.maxPage - 1;
  }

  isPriorMaxPage(page: number) {
    return page === this.maxPage - 2;
  }
}
