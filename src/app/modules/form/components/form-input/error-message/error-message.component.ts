import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from 'ngx-strongly-typed-forms';
import { BaseQuestion } from '../../../../../core/model/questions.model';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() control: FormControl<BaseQuestion<string>>;
  @Input() label: string;
  constructor() {}

  ngOnInit() {}

  get isValid() {
    return this.control.valid;
  }

  get isRequired() {
    return this.control.errors.required;
  }
  get isMax() {
    const maxObj = this.control.errors.maxlength;
    return maxObj ? maxObj.requiredLength < maxObj.actualLength : false;
  }
  get isMin() {
    const minObj = this.control.errors.minlength;
    return minObj ? minObj.requiredLength >= minObj.actualLength : false;
  }
  get dirty() {
    return this.control.dirty;
  }
  get touched() {
    return this.control.touched;
  }
  get otherInvalid() {
    return (
      !(this.isMax || this.isMin || this.isRequired) && this.control.errors
    );
  }
}
