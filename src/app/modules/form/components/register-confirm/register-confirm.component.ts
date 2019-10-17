import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.scss'],
})
export class RegisterConfirmComponent implements OnInit {
  eventName = this.formService.eventName;
  step = this.formService.groups;
  questions = [...this.formService.questions$.value];
  constructor(private formService: FormService) {}

  ngOnInit() {
    this.questions.pop();
  }
}
