import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from 'ngx-strongly-typed-forms';
import { BaseQuestion } from '../model/questions.model';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {
  constructor(private fb: FormBuilder) {}

  toFormGroup(questions: BaseQuestion<any>[][]): FormGroup<StepsGroup> {
    let groups = {};
    questions.forEach((questionSet, i) => {
      let group = {};
      questionSet.forEach(question => {
        group[question.key] = [question.value || '', question.validators];
      });
      groups[i] = this.fb.group<Group>(group);
    });
    return this.fb.group<StepsGroup>(groups);
  }
}

interface StepsGroup {
  [key: number]: FormGroup<Group>;
}

interface Group {
  [key: string]: FormControl<string>;
}