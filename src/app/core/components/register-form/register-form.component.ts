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
  @Input() step: Step = { title: null, subtitle: null };
  precessedQuestions: BaseQuestion<any>[][];
  questions: BaseQuestion<any>[] = [
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
    }),
    new TextboxQuestion({
      description: 'something 3',
      key: 'question3',
      label: 'label 3',
      order: 3,
      // required: false,
      title: 'QUESTION 3',
      value: 'prefilled value 3'
    }),
    new TextboxQuestion({
      description: 'something 4',
      key: 'question4',
      label: 'label 4',
      order: 4,
      // required: false,
      title: 'QUESTION 4',
      value: 'prefilled value 4'
    }),
    new TextboxQuestion({
      description: 'something 5',
      key: 'question5',
      label: 'label 5',
      order: 5,
      // required: false,
      title: 'QUESTION 5',
      value: 'prefilled value 5'
    })
  ];
  // this.questions default must be []
  form: FormGroup;
  constructor(private formGenerator: FormGeneratorService) {}

  ngOnInit() {
    this.form = this.formGenerator.toFormGroup(this.questions);
    this.precessedQuestions = this.questions
      .sort((a, b) => a.order - b.order)
      .reduce((result, question, i) => {
        i % 2 === 0
          ? result.push([question])
          : result[result.length - 1].push(question);
        return result;
      }, []);
    console.log(this.precessedQuestions, 'q');
  }
}
