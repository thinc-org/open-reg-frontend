import { Component, OnInit, Input } from '@angular/core';
import { Step } from 'src/app/modules/register/register.component';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input('questions') questions = [];
  @Input('step') topic: Step = {title: null, subtitle: null};
  constructor() { }

  ngOnInit() {
  }

}
