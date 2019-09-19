import { Component, OnInit, Input } from '@angular/core';
import { Step } from 'src/app/modules/register/register.component';
import { FormGeneratorService } from '../../services/form-generator.service';
import { BaseQuestion, TextboxQuestion } from '../../model/questions.model';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input('questions') blank = [];
  @Input() step: Step = {title: null, subtitle: null};
  questions: BaseQuestion<any>[]  = [
    new TextboxQuestion({
      description: 'something 1',
      key: 'question1',
      label: 'label 1',
      order: 1,
      validators: [Validators.required],
      title: 'QUESTION 1',
      value: 'prefilled value'
    }),
    new TextboxQuestion({
      description: 'something 2',
      key: 'question2',
      label: 'label 2',
      order: 2,
      // required: false,
      title: 'QUESTION 2',
      value: 'prefilled value 2'
    })
  ]
  form: FormGroup;
  constructor(private formGenerator: FormGeneratorService) {
  }
  
  ngOnInit() {
    this.form = this.formGenerator.toFormGroup(this.questions);
  }

}
