import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.scss'],
})
export class RegisterConfirmComponent implements OnInit {
  eventName = this.formService.eventName;
  form = this.formService.form;
  step = this.formService.groups;
  result: Result[][];
  constructor(private formService: FormService) {}

  ngOnInit() {
    this.result = this.convertObjectToArray(this.form.value);
    this.result.pop();
    // console.log(this.form)
  }

  convertObjectToArray(obj: any) {
    return Object.keys(obj).map(key => {
      return obj[key];
    });
  }
}

interface Result {
  [key: string]: string;
}
