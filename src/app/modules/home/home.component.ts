import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Observable,
  combineLatest,
  interval,
  BehaviorSubject,
  Subject,
  defer,
} from 'rxjs';
import { HomeServiceService } from './home-service.service';
import { takeUntil, endWith, switchMap, share } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  posts$: Observable<any[]> = this.homeService.getPosts().pipe(share());

  destroy$ = new Subject();
  refresh$ = new BehaviorSubject(undefined);

  click$ = new Subject();

  timer$ = defer(() => interval(1000));
  display$ = this.refresh$.pipe(
    switchMap(_ => {
      return combineLatest([this.timer$, this.posts$]).pipe(
        takeUntil(this.destroy$),
        endWith('destroyed')
      );
    })
  );

  constructor(private homeService: HomeServiceService) {
    this.click$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next(undefined);
  }
}
