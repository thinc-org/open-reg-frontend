import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from 'ngx-strongly-typed-forms';
import { BaseQuestion } from '../model/questions.model';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {
  constructor(private fb: FormBuilder) {}

  toFormGroup(questions: BaseQuestion<any>[][]): FormGroup<any> {
    let groups = {};
    questions.forEach((questionSet, i) => {
      let group = {};
      questionSet.forEach(question => {
        group[question.key] = [question.value || '', question.validators];
      });
      groups[i] = this.fb.group(group);
    });
    return this.fb.group(groups);
  }
}
