import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseQuestion } from '../model/questions.model';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {
  constructor() {}

  toFormGroup(emptyForm: FormGroup, questions: BaseQuestion<any>[][]) {
    // let pages = {};
    questions.forEach((questionSet, i) => {
      let group = {};
      questionSet.forEach(question => {
        group[question.key] = new FormControl(question.value || '', question.validators)
      })
      emptyForm.addControl('' + i, new FormGroup(group));
    });
    // console.log(pages, 'pages');
    // return new FormGroup(pages);
  }
}
