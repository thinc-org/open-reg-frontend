import { Component, OnInit, Input } from '@angular/core';
import { TextboxQuestion } from '../../model/questions.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  // @Input() placeholder: string = null;
  @Input() question: TextboxQuestion;
  @Input() form: FormGroup;
  constructor() {
  }

  get isValid() { return this.form.controls[this.question.key].valid; }
  
  ngOnInit() {
    console.log(this.question, 'init')
  }
}
