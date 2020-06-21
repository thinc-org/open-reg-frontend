import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements AfterViewInit {
  @Input() items: any[] = [];
  @Input() currentPage = 0;
  @Input() itemsPerPage = 2;
  @Output() pageChange = new EventEmitter<number>();

  startPage = 0;
  maxPageNumberToDisplay = 0;

  @ViewChild('pagination') paginationEl?: ElementRef;
  @ViewChild('paginationNavigation') paginationNavEl?: ElementRef;
  @ViewChildren('paginationPage') paginationPageEls?: QueryList<any>;

  EACH_PAGE_WIDTH = 0;
  PAGE_BUTTON_WIDTH = 0;
  PAGINATION_PADDING = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.EACH_PAGE_WIDTH = this.getCompleteWidth(this.paginationPageEls?.last);
    this.PAGE_BUTTON_WIDTH = this.getCompleteWidth(this.paginationNavEl);
    this.PAGINATION_PADDING = this.getPadding(this.paginationEl);
    this.calculateLastPageNumberToDisplay();
    this.adjustStartPage(true);
    this.cdr.detectChanges();
  }

  get maxPage() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  get maxPageArray() {
    return [].constructor(this.maxPage);
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

  shouldShow(page: number) {
    const isLessThanPageToDisplay = page <= this.maxPageNumberToDisplay + this.startPage;
    const isMoreThanStartPage = page >= this.startPage;
    const isMaxPage = page === this.maxPage - 1;
    return (isLessThanPageToDisplay && isMoreThanStartPage) || isMaxPage;
  }

  isPriorMaxPage(page: number) {
    return page === this.maxPage - 2;
  }

  adjustStartPage(isPageUp: boolean) {
    const isMoreThanLastPage = this.maxPageNumberToDisplay + this.startPage < this.currentPage + 1;
    const isMaxPage = this.currentPage === this.maxPage - 1;
    const isLessThanStartPage = this.startPage > this.currentPage;
    if (isPageUp && isMoreThanLastPage && !isMaxPage) {
      this.startPage = this.currentPage;
      this.cdr.detectChanges();
    } else if (isMaxPage) {
      this.startPage = Math.min(this.maxPage - this.maxPageNumberToDisplay - 1, this.maxPage);
      this.cdr.detectChanges();
    } else if (!isPageUp && isLessThanStartPage) {
      this.startPage = Math.max(this.startPage - this.maxPageNumberToDisplay - 1, 0);
      this.cdr.detectChanges();
    }
  }

  getCompleteWidth(el?: ElementRef<any>) {
    const element = el?.nativeElement;
    const style = element.currentStyle || window.getComputedStyle(element);
    const { offsetWidth } = element;
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    return offsetWidth + margin;
  }

  getPadding(el?: ElementRef<any>) {
    const element = el?.nativeElement;
    const style = element.currentStyle || window.getComputedStyle(element);
    const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return padding;
  }

  calculateLastPageNumberToDisplay() {
    const CONTAINER_WIDTH = this.paginationEl?.nativeElement.offsetWidth;
    const PAGE_NUMBER_WIDTH =
      CONTAINER_WIDTH - this.PAGINATION_PADDING - this.PAGE_BUTTON_WIDTH * 2;
    const lastPageToDisplay = Math.floor(PAGE_NUMBER_WIDTH / this.EACH_PAGE_WIDTH) - 2;
    this.maxPageNumberToDisplay = lastPageToDisplay;
  }
}
