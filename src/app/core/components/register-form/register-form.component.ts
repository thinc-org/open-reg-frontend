import { Component, OnInit, Input } from '@angular/core';
// import { FormGeneratorService } from '../../services/form-generator.service';
import { BaseQuestion } from '../../model/questions.model';
import { FormGroup } from '@angular/forms';
import { Step } from 'src/app/modules/register/register.service';
import { BehaviorSubject, Observable, timer, of, Subject } from 'rxjs';
import { map, reduce, tap, catchError, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input() questions$: BehaviorSubject<BaseQuestion<any>[][]>;
  @Input('step') _step: Step;
  @Input() form: FormGroup;
  @Input() currentStep: number;

  precessedQuestions$: Observable<BaseQuestion<any>[][]>;
  processedQuestions: BaseQuestion<any>[][];
  destroy$ = new Subject<any>();

  constructor() {
    // timer(3000).subscribe(() =>
    //   console.log(this.questions$, this.precessedQuestions$, 'this')
    // );
  }

  get step() {
    return this._step ? this._step : { title: null, description: null, n: 1 };
  }

  ngOnInit() {
    this.precessedQuestions$ = this.questions$.pipe(
      takeUntil(this.destroy$),
      map(e => e[this.currentStep]),
      map(e => e ? e.sort((a, b) => a.order - b.order) : []),
      map(this.reduce),
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
