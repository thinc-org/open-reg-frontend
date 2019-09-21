import { Injectable } from '@angular/core';
import { BaseQuestion } from '../../core/model/questions.model';
import { ApiService } from '../../core/services/api.service';
import { share, takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { FormGeneratorService } from 'src/app/core/services/form-generator.service';
import { FormGroup } from 'ngx-strongly-typed-forms';

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
  form: FormGroup<any> = new FormGroup<any>({});
  currentStep$ = new BehaviorSubject<number>(1);

  complete() {
    this.destroy$.next(undefined);
    this.destroy$.unsubscribe();
  }

  constructor(
    private api: ApiService,
    private formGenerator: FormGeneratorService
  ) {
    this.questions$.pipe(takeUntil(this.destroy$)).subscribe();
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
        let convertedQuestions = this.convertQuestions(
          apiResult.questions,
          this.groups.length
        );
        for (let i = 0; i < convertedQuestions[currentStep - 1].length; i++) {
          const valueGroup = this.form.value[currentStep - 1];
          const key = convertedQuestions[currentStep - 1][i].key;
          if (valueGroup[key] !== undefined) {
            convertedQuestions[currentStep - 1][i].value = valueGroup[key];
          }
        }
        this.questions$.next(convertedQuestions[currentStep - 1]);
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
