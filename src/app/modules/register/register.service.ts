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
  form: FormGroup<any> = null;
  currentStep$ = new BehaviorSubject<number>(1);
  eventName: string;

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
      (result.group as Step[]).push({
        description: 'CONFIRMATION',
        n: result.length + 1,
        title: 'ยืนยันการลงทะเบียน'
      });
      this.groups = result.group;
      this.eventName = result.title;
      const convertedQuestions = this.convertQuestions(
        result.questions,
        this.groups.length
      );
      this.form = this.formGenerator.toFormGroup(convertedQuestions);
    });

    // As a user, every time he/she change step,
    // the system need to save user's answered question form this.form into this.questions$ array
    // so that when user go back to the previous step,
    // the answered question will not disappear from the form
    combineLatest(this.currentStep$, this.apiResult$)
      .pipe(takeUntil(this.destroy$))
      .subscribe(([currentStep, apiResult]) => {
        const convertedQuestions = this.convertQuestions(
          apiResult.questions,
          this.groups.length
        );
        const filledQuestions = this.addValueToQuestions(
          convertedQuestions[currentStep - 1],
          this.form.value[currentStep - 1]
        );
        this.questions$.next(filledQuestions);
      });
  }

  private addValueToQuestions(
    currentConvertedQuestions: BaseQuestion<any>[],
    currentFormValue: FormGroup<any>
  ): BaseQuestion<any>[] {
    return currentConvertedQuestions.map(question => {
      question.value = currentFormValue[question.key];
      return question;
    });
  }

  private convertQuestions(
    questions: BaseQuestion<any>[],
    groupNumber: number = 0
  ): BaseQuestion<any>[][] {
    const result = [];
    for (let i = 1; i <= groupNumber; i++) {
      result.push([]);
      for (const question of questions) {
        if (question.group - 0 === i) {
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
