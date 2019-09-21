import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from 'ngx-strongly-typed-forms';
import { BaseQuestion } from '../model/questions.model';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {
  constructor() {}

  toFormGroup(emptyForm: FormGroup<any>, questions: BaseQuestion<any>[][]) {
    questions.forEach((questionSet, i) => {
      let group = {};
      questionSet.forEach(question => {
        group[question.key] = new FormControl<BaseQuestion<any>>(
          question.value || '',
          question.validators
        );
      });
      emptyForm.addControl('' + i, new FormGroup<any>(group));
    });
  }
}
