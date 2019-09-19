import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseQuestion } from '../model/questions.model';

@Injectable({
  providedIn: 'root'
})

export class FormGeneratorService {
  constructor() {}

  toFormGroup(questions: BaseQuestion<any>[]) {
    let group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  toQuestions(jsonArray: any): BaseQuestion<any>[] {
    // Not implemented
    // Maybe use Rxjs instead of this method
    return null;
  }

  private toFormControl() {}
}
