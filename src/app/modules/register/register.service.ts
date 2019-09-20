import { Injectable } from '@angular/core';
import { BaseQuestion } from '../../core/model/questions.model';
import { ApiService } from '../../core/services/api.service';
import { share, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
  questions: BaseQuestion<any>[][] = [];
  groups: Step[] = [];
  form: FormGroup;

  complete() {
    this.destroy$.next(undefined);
    this.destroy$.unsubscribe();
  }

  constructor(
    private api: ApiService,
    private formGenerator: FormGeneratorService
  ) {
    this.apiResult$.subscribe(result => {
      this.groups = result.group;
      this.questions = this.convertQuestions(result.questions, this.groups.length);
      this.form = this.formGenerator.toFormGroup(this.questions);
    });
  }

  convertQuestions(
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
