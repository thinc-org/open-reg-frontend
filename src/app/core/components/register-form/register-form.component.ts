import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BaseQuestion } from '../../model/questions.model';
import { FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/modules/register/register.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit, OnDestroy {
  @Input() form: FormGroup;

  questions$: BehaviorSubject<BaseQuestion<any>[]>;
  eventName: string;
  precessedQuestions$: Observable<BaseQuestion<any>[][]>;
  processedQuestions: BaseQuestion<any>[][];
  destroy$ = new Subject<any>();

  constructor(private registerService: RegisterService) {
    this.questions$ = this.registerService.questions$;
    this.eventName = this.registerService.eventName;
  }

  ngOnInit() {
    this.precessedQuestions$ = this.questions$.pipe(
      takeUntil(this.destroy$),
      map(e => (e ? e.sort((a, b) => a.order - b.order) : [])),
      map(this.reduce)
    );
    this.precessedQuestions$.subscribe(result => {
      this.processedQuestions = result;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.unsubscribe();
  }

  private reduce(array: BaseQuestion<any>[]) {
    return array.reduce((result, question, i) => {
      i % 2 === 0
        ? result.push([question])
        : result[result.length - 1].push(question);
      return result;
    }, []);
  }
}
