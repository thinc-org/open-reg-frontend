import { Component, OnInit, Input } from '@angular/core';
// import { FormGeneratorService } from '../../services/form-generator.service';
import { BaseQuestion } from '../../model/questions.model';
import { FormGroup } from '@angular/forms';
import { Step } from 'src/app/modules/register/register.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input() questions: BaseQuestion<any>[];
  @Input() step: Step = { title: null, description: null, n: 1 };
  @Input() form: FormGroup;
  precessedQuestions: BaseQuestion<any>[][];
  
  constructor() {}

  ngOnInit() {
    // this.form = this.formGenerator.toFormGroup(this.questions);
    this.precessedQuestions = this.questions
      .sort((a, b) => a.order - b.order)
      .reduce((result, question, i) => {
        i % 2 === 0
          ? result.push([question])
          : result[result.length - 1].push(question);
        return result;
      }, []);
  }
}
