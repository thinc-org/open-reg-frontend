import { Injectable } from '@angular/core';
import {
  BaseQuestion,
  QuestionModel,
  QuestionOptions,
  DropdownQuestion,
  TextboxQuestion,
  QuestionTypes,
} from '../../core/model/questions.model';
import {
  takeUntil,
  pairwise,
  startWith,
  map,
  switchMap,
  shareReplay,
} from 'rxjs/operators';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { FormGeneratorService } from 'src/app/core/services/form-generator.service';
import { FormGroup } from 'ngx-strongly-typed-forms';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/app/api/services';
// import { CustomValidators } from 'src/app/core/model/validators.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  destroy$ = new Subject<any>();

  questions$: BehaviorSubject<BaseQuestion<any>[][]> = new BehaviorSubject<
    BaseQuestion<any>[][]
  >([]);
  groups: Step[] = [];
  form: FormGroup<any> = null;
  currentStep$ = new BehaviorSubject<number>(1);
  eventName: string;
  apiResult$: Observable<any>;

  complete() {
    this.destroy$.next(undefined);
  }

  constructor(
    private api: ApiService,
    private formGenerator: FormGeneratorService
  ) {
    this.questions$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  initializeForm(formId: string, formData: Observable<any>) {
    /**  As a user, every time he/she change step,
     *  the system need to save user's answered question form this.form into this.questions$ array
     * so that when user go back to the previous step,
     * the answered question will not disappear from the form
     */
    this.apiResult$ = formData
      ? formData
      : (this.api.getFormId(formId).pipe(shareReplay(1)) as Observable<any>);

    this.apiResult$.pipe(takeUntil(this.destroy$)).subscribe(result => {
      (result.groups as Step[]).push({
        description: 'CONFIRMATION',
        order: result.length + 1,
        title: 'ยืนยันการลงทะเบียน',
      });
      this.groups = result.groups;
      this.eventName = result.title;
      const convertedQuestions = this.convertQuestions(
        result.questions,
        this.groups.length
      );
      this.form = this.formGenerator.toFormGroup(convertedQuestions);
    });

    this.currentStep$
      .pipe(
        takeUntil(this.destroy$),
        startWith(1),
        pairwise(),
        switchMap(([previousStep, _]) => {
          return this.apiResult$.pipe(map(result => [previousStep, result]));
        })
      )
      .subscribe(([previousStep, apiResult]) => {
        const convertedQuestions =
          this.questions$.value.length > 0
            ? [...this.questions$.value]
            : this.convertQuestions(apiResult.questions, this.groups.length);
        this.addValueToQuestions(
          convertedQuestions[previousStep - 1],
          this.form.value[previousStep - 1]
        );
        this.questions$.next(convertedQuestions);
      });
  }

  private addValueToQuestions(
    currentConvertedQuestions: BaseQuestion<any>[],
    currentFormValue: FormGroup<any>
  ): void {
    currentConvertedQuestions = currentConvertedQuestions.map(question => {
      question.value = currentFormValue[question.key];
      return question;
    });
  }

  private convertQuestions(
    questions: QuestionModel[],
    groupNumber: number = 0
  ): BaseQuestion<any>[][] {
    const result = [];
    for (let i = 1; i <= groupNumber; i++) {
      result.push([]);
      for (const question of questions) {
        if (question.group - 0 === i) {
          const options: QuestionOptions<any> = {
            ...question,
            label: '' + question.label,
            key: '' + question.key,
            required: question.required,
          };
          const convertedQuestion = this.generateQuestion(options);
          result[i - 1].push(convertedQuestion);
        }
      }
    }
    return result;
  }
  private generateQuestion(options: QuestionOptions<any>): BaseQuestion<any> {
    const type = options.type;
    const validators = this.generateValidators(
      options.type as QuestionTypes,
      options.required
    );
    switch (type) {
      case 'RADIO':
        return new DropdownQuestion(options, 'radio', validators);
      case 'DROPDOWN':
        return new DropdownQuestion(options, 'dropdown', validators);
      default:
        return new TextboxQuestion(options, validators);
    }
  }
  private generateValidators(type: QuestionTypes, required: boolean) {
    const validators = [];
    if (required) {
      validators.push(Validators.required);
    }
    switch (type) {
      case 'EMAIL':
        validators.push(Validators.email);
        break;
      case 'PHONE':
        validators.push(Validators.pattern('^0[0-9]{9}$'));
        break;
      // case 'FILE':
      //   validators.push(CustomValidators.requiredFileType('png'));
      //   break;
    }
    return validators;
  }
}

export interface Step {
  order: number;
  title: string;
  description: string;
}
