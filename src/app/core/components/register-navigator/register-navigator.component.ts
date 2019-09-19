import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'register-navigator',
  templateUrl: './register-navigator.component.html',
  styleUrls: ['./register-navigator.component.scss']
})
export class RegisterNavigatorComponent implements OnInit {
  @Output('nextStep') nextStepEmitter: EventEmitter<any> = new EventEmitter();
  @Output('previousStep') previousStepEmitter: EventEmitter<any> = new EventEmitter();
  @Input('currentStep') currentStep = 0;
  @Input('totalSteps') totalSteps = 0;
  constructor() { }

  ngOnInit() {
  }

}
