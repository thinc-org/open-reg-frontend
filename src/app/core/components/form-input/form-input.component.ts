import { Component, OnInit, Input } from '@angular/core';
import { TextboxQuestion } from '../../model/questions.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() question: TextboxQuestion;
  @Input() form: FormGroup;
  constructor() {}

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  get formControl() {
    return this.form.controls[this.question.key];
  }
  get isRequired() {
    return this.formControl.errors.required;
  }
  get isMax() {
    const maxObj = this.formControl.errors.maxlength;
    return maxObj ? maxObj.requiredLength < maxObj.actualLength: false;
  }
  get isMin() {
    const minObj = this.formControl.errors.minlength; 
    return minObj ? minObj.requiredLength >= minObj.actualLength: false;
  }
  get dirty() {
    return this.formControl.dirty;
  }
  get touched() {
    return this.formControl.touched;
  }
  get email() {
    return this.formControl.errors.email;
  }
  ngOnInit() {
    console.log(this.form.controls[this.question.key]);
  }
}
