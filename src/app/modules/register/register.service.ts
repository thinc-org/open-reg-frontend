import { Injectable } from '@angular/core';
import { BaseQuestion } from '../../core/model/questions.model';
import { ApiService } from '../../core/services/api.service';
import { share, takeUntil, flatMap } from 'rxjs/operators';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { FormGeneratorService } from 'src/app/core/services/form-generator.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  destroy$ = new Subject<any>();
  apiResult$ = this.api.get<any>('questions').pipe(
    share(),
    takeUntil(this.destroy$)
  );
  questions$: BehaviorSubject<BaseQuestion<any>[]> = new BehaviorSubject<
    BaseQuestion<any>[]
  >([]);
  groups: Step[] = [];
  form: FormGroup = new FormGroup({});
  currentStep$ = new BehaviorSubject<number>(1);

  complete() {
    this.destroy$.next(undefined);
    this.destroy$.unsubscribe();
  }

  constructor(
    private api: ApiService,
    private formGenerator: FormGeneratorService
  ) {
    this.questions$
      .pipe(takeUntil(this.destroy$))
      .subscribe(e => console.log(e, 'go'));
    this.apiResult$.subscribe(result => {
      this.groups = result.group;
      const convertedQuestions = this.convertQuestions(
        result.questions,
        this.groups.length
      );
      this.formGenerator.toFormGroup(this.form, convertedQuestions);
    });
    combineLatest(this.currentStep$, this.apiResult$)
      .pipe(takeUntil(this.destroy$))
      .subscribe(([currentStep, apiResult]) => {
        const convertedQuestions = this.convertQuestions(
          apiResult.questions,
          this.groups.length
        )[currentStep - 1];
        this.questions$.next(convertedQuestions);
      });
  }

  private convertQuestions(
    questions: BaseQuestion<any>[],
    groupNumber: number = 0
  ): BaseQuestion<any>[][] {
    let result = [];
    for (let i = 1; i <= groupNumber; i++) {
      result.push([]);
      for (let question of questions) {
        if (question.group == i) {
          result[i - 1].push(question);
        }
      }
    }
    return result;
  }
}

export interface Step {
  n: number;
  title: string;
  description: string;
}
