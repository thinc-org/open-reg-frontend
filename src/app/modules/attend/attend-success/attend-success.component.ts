import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-attend-success',
  templateUrl: './attend-success.component.html',
  styleUrls: ['./attend-success.component.scss'],
})
export class AttendSuccessComponent implements OnInit {
  department$ = this.activatedRoute.paramMap.pipe(
    map(() => window.history.state.department)
  );
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap
      .pipe(
        take(1),
        tap(console.log),
        filter(e => !window.history.state.department)
      )
      .subscribe(e => {
        this.router.navigate(['/attend']);
      });
  }

  ngOnInit() {}
}
