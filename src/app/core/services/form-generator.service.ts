import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, FormControl } from 'ngx-strongly-typed-forms';
=======
import { FormGroup, FormControl } from '@angular/forms';
>>>>>>> upstream/dev
import { BaseQuestion } from '../model/questions.model';

@Injectable({
  providedIn: 'root',
})
export class FormGeneratorService {
  constructor(private fb: FormBuilder) {}

<<<<<<< HEAD
  toFormGroup(questions: BaseQuestion<any>[][]): FormGroup<StepsGroup> {
    let groups = {};
    questions.forEach((questionSet, i) => {
      let group = {};
      questionSet.forEach(question => {
        let value =
          question.controlType !== 'dropdown'
            ? question.value || ''
            : question.value;
        group[question.key] = [value, question.validators];
      });
      groups[i] = this.fb.group<Group>(group);
=======
  toFormGroup(questions: BaseQuestion<any>[]) {
    const group: any = {};
    questions.forEach(question => {
      group[question.key] = new FormControl(
        question.value || '',
        question.validators
      );
>>>>>>> upstream/dev
    });
    return this.fb.group<StepsGroup>(groups);
  }
}

<<<<<<< HEAD
interface StepsGroup {
  [key: number]: FormGroup<Group>;
}

interface Group {
  [key: string]: FormControl<string>;
=======
  toQuestions(_: any): BaseQuestion<any>[] {
    // Not implemented
    // Maybe use Rxjs instead of this method
    return null;
  }

  // private toFormControl() {}
>>>>>>> upstream/dev
}
