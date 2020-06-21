/* eslint-disable @typescript-eslint/dot-notation */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { ElementRef, Component } from '@angular/core';
import { PaginationComponent } from './pagination.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'test-component-wrapper',
  template: '<app-pagination (pageChange)="changePage($event)" [items]="items"></app-pagination>',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
class TestComponentWrapper {
  items = [].constructor(100);
  changePage() {}
}

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  const MOCK_ITEMS_100 = [].constructor(100);
  let detectChangesSpy: jasmine.Spy<() => void>;
  let pageChangeEmitSpy: jasmine.Spy<() => void>;
  let adjustStartPageSpy: jasmine.Spy<() => void>;
  let calculateMaxPageNumberToDisplaySpy: jasmine.Spy<() => void>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent, TestComponentWrapper],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    detectChangesSpy = spyOn(component['cdr'], 'detectChanges').and.callThrough();
    pageChangeEmitSpy = spyOn(component.pageChange, 'emit').and.callThrough();
    adjustStartPageSpy = spyOn(component, 'adjustStartPage').and.callThrough();
    calculateMaxPageNumberToDisplaySpy = spyOn(
      component,
      'calculateMaxPageNumberToDisplay'
    ).and.callThrough();
  });

  afterEach(() => {
    detectChangesSpy.calls.reset();
    pageChangeEmitSpy.calls.reset();
    adjustStartPageSpy.calls.reset();
    calculateMaxPageNumberToDisplaySpy.calls.reset();
  });

  it('should create with no items', () => {
    const buttons = fixture.nativeElement.querySelector('.pagination-page').children;
    const navigations = fixture.nativeElement.querySelectorAll('.pagination-controller');

    expect(buttons.length).toBe(0);
    expect(navigations.length).toBe(2);
    expect(navigations[0].innerText).toBe('navigate_before');
    expect(navigations[1].innerText).toBe('navigate_next');
  });

  it('should create with items', () => {
    const fixture2 = TestBed.createComponent(TestComponentWrapper);
    const component2 = fixture2.componentInstance;
    component2.items = MOCK_ITEMS_100;
    fixture2.detectChanges();

    const buttons = fixture2.nativeElement.querySelector('.pagination-page').children;
    const currentPageButton = buttons[0];
    const currentPageInnerText = currentPageButton.innerText;
    const navigations = fixture2.nativeElement.querySelectorAll('.pagination-controller');

    expect(currentPageButton.classList[0]).toEqual('current-page');
    expect(currentPageInnerText).toMatch('1');
    expect(buttons[buttons.length - 1].innerText).toMatch('50');
    expect(navigations.length).toBe(2);
    expect(navigations[0].innerText).toBe('navigate_before');
    expect(navigations[1].innerText).toBe('navigate_next');
  });

  it('should get maxPage correctly', () => {
    component.items = MOCK_ITEMS_100;
    component.itemsPerPage = 10;
    fixture.detectChanges();

    expect(component.maxPage).toBe(10);
  });

  it('should create maxPageArray correctly', () => {
    component.items = MOCK_ITEMS_100;
    component.itemsPerPage = 10;
    fixture.detectChanges();

    expect(component.maxPageArray.length).toBe(10);
  });

  it('should change page when page to change is exist', () => {
    const PAGE_TO_CHANGE = 20;

    component.items = MOCK_ITEMS_100;
    component.changePage(PAGE_TO_CHANGE);

    expect(component.currentPage).toBe(PAGE_TO_CHANGE);
    expect(pageChangeEmitSpy).toHaveBeenCalledWith(PAGE_TO_CHANGE);
    expect(adjustStartPageSpy).toHaveBeenCalledWith(true);

    adjustStartPageSpy.calls.reset();
    pageChangeEmitSpy.calls.reset();

    const PAGE_TO_CHANGE2 = 10;
    component.changePage(PAGE_TO_CHANGE2);

    expect(component.currentPage).toBe(PAGE_TO_CHANGE2);
    expect(pageChangeEmitSpy).toHaveBeenCalledWith(PAGE_TO_CHANGE2);
    expect(adjustStartPageSpy).toHaveBeenCalledWith(false);
  });

  it('should not change page when page to change is not exist', () => {
    const PAGE_TO_CHANGE = 101;
    const INITIAL_CURRENT_PAGE = component.currentPage;

    component.items = MOCK_ITEMS_100;
    component.changePage(PAGE_TO_CHANGE);

    expect(component.currentPage).toBe(INITIAL_CURRENT_PAGE);
    expect(pageChangeEmitSpy).not.toHaveBeenCalled();
    expect(adjustStartPageSpy).not.toHaveBeenCalled();

    adjustStartPageSpy.calls.reset();
    pageChangeEmitSpy.calls.reset();

    const PAGE_TO_CHANGE2 = -1;
    component.changePage(PAGE_TO_CHANGE2);

    expect(component.currentPage).toBe(INITIAL_CURRENT_PAGE);
    expect(pageChangeEmitSpy).not.toHaveBeenCalled();
    expect(adjustStartPageSpy).not.toHaveBeenCalled();
  });

  it('should return correct value with shouldShow method', () => {
    component.items = MOCK_ITEMS_100;
    component.maxPageNumberToDisplay = 5;
    component.startPage = 1;

    const MAX_PAGE = 49;
    const PAGE_2 = 1;
    const PAGE_7 = 6;
    const PAGE_1 = 0;
    const PAGE_8 = 7;

    expect(component.shouldShow(MAX_PAGE)).toBe(true);
    expect(component.shouldShow(PAGE_2)).toBe(true);
    expect(component.shouldShow(PAGE_7)).toBe(true);

    expect(component.shouldShow(PAGE_1)).toBe(false);
    expect(component.shouldShow(PAGE_8)).toBe(false);
  });

  it('should render with *ngIf="shouldShow(i)" correctly', () => {
    const shouldShowSpy = spyOn(component, 'shouldShow').and.callFake((page: number) => page < 4);
    component.items = MOCK_ITEMS_100;
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelector('.pagination-page').children;

    expect(buttons.length).toBe(5);
    shouldShowSpy.calls.reset();
  });

  it('should adjustStartPage correctly when pageUp', () => {
    component.items = MOCK_ITEMS_100;
    component.startPage = 3;
    component.currentPage = 9;
    component.maxPageNumberToDisplay = 5;
    component.adjustStartPage(true);

    expect(detectChangesSpy).toHaveBeenCalledTimes(1);
    expect(component.startPage).toBe(component.currentPage);
    detectChangesSpy.calls.reset();

    component.startPage = 5;
    component.currentPage = 18;
    component.maxPageNumberToDisplay = 5;

    component.adjustStartPage(true);

    expect(detectChangesSpy).toHaveBeenCalledTimes(1);
    expect(component.startPage).toBe(component.currentPage);
  });

  it('should adjustStartPage correctly when go to max page range', () => {
    component.items = MOCK_ITEMS_100;

    component.startPage = 5;
    component.currentPage = 49;
    component.maxPageNumberToDisplay = 5;

    component.adjustStartPage(true);

    expect(detectChangesSpy).toHaveBeenCalledTimes(1);
    expect(component.startPage).toBe(44);
    detectChangesSpy.calls.reset();

    component.startPage = 5;
    component.currentPage = 44;
    component.maxPageNumberToDisplay = 5;

    component.adjustStartPage(true);

    expect(detectChangesSpy).toHaveBeenCalledTimes(1);
    expect(component.startPage).toBe(component.currentPage);
  });

  it('should adjustStartPage correctly when pageDown', () => {
    component.items = MOCK_ITEMS_100;
    component.startPage = 3;
    component.currentPage = 0;
    component.maxPageNumberToDisplay = 6;

    component.adjustStartPage(false);

    expect(detectChangesSpy).toHaveBeenCalledTimes(1);
    expect(component.startPage).toBe(0);
    detectChangesSpy.calls.reset();

    component.startPage = 10;
    component.currentPage = 8;
    component.maxPageNumberToDisplay = 5;

    component.adjustStartPage(false);

    expect(detectChangesSpy).toHaveBeenCalledTimes(1);
    expect(component.startPage).toBe(4);
  });

  it('should not call detect changes when adjustStartPage with unmatch conditions', () => {
    component.items = MOCK_ITEMS_100;

    component.startPage = 5;
    component.currentPage = 8;
    component.maxPageNumberToDisplay = 3;

    component.adjustStartPage(true);

    expect(detectChangesSpy).not.toHaveBeenCalled();
    expect(component.startPage).not.toBe(component.currentPage);
    detectChangesSpy.calls.reset();

    component.startPage = 5;
    component.currentPage = 6;
    component.maxPageNumberToDisplay = 5;

    component.adjustStartPage(false);

    expect(detectChangesSpy).not.toHaveBeenCalled();
    expect(component.startPage).not.toBe(component.currentPage);
    detectChangesSpy.calls.reset();
  });

  it('should getCompleteWidth correctly', () => {
    const MOCK_ELEMENT = {
      nativeElement: {
        offsetWidth: 100,
        currentStyle: { marginLeft: '10px', marginRight: '10px' },
      },
    };
    const result = component.getCompleteWidth(MOCK_ELEMENT);
    expect(result).toBe(120);

    const MOCK_ELEMENT2 = {} as ElementRef;
    const result2 = component.getCompleteWidth(MOCK_ELEMENT2);
    expect(result2).toBe(0);
  });

  it('should getPadding correctly', () => {
    const MOCK_ELEMENT = {
      nativeElement: {
        currentStyle: { paddingLeft: '10px', paddingRight: '10px' },
      },
    };
    const result = component.getPadding(MOCK_ELEMENT);
    expect(result).toBe(20);

    const MOCK_ELEMENT2 = {} as ElementRef;
    const result2 = component.getPadding(MOCK_ELEMENT2);
    expect(result2).toBe(0);
  });

  it('should resize correctly', () => {
    component.onResize();
    expect(calculateMaxPageNumberToDisplaySpy).toHaveBeenCalledTimes(1);
    expect(adjustStartPageSpy).toHaveBeenCalledWith(true);
  });

  it('should navigate correctly', fakeAsync(() => {
    const fixture2 = TestBed.createComponent(TestComponentWrapper);
    const component2 = fixture2.componentInstance;
    component2.items = MOCK_ITEMS_100;
    const changePageSpy = spyOn(component2, 'changePage').and.callThrough();
    fixture2.detectChanges();

    const buttons = fixture2.nativeElement.querySelector('.pagination-page').children;
    const navigations = fixture2.nativeElement.querySelectorAll('.pagination-controller');

    navigations[1].click();
    tick();
    expect(changePageSpy).toHaveBeenCalledWith(1);
    changePageSpy.calls.reset();

    navigations[1].click();
    tick();
    expect(changePageSpy).toHaveBeenCalledWith(2);
    changePageSpy.calls.reset();

    navigations[0].click();
    tick();
    expect(changePageSpy).toHaveBeenCalledWith(1);
    changePageSpy.calls.reset();

    navigations[0].click();
    tick();
    expect(changePageSpy).toHaveBeenCalledWith(0);
    changePageSpy.calls.reset();

    buttons[10].click();
    tick();
    expect(changePageSpy).toHaveBeenCalledWith(10);
    changePageSpy.calls.reset();
  }));
});
