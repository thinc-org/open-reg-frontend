import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Step } from '../../form.service';

@Component({
  selector: 'app-register-navigator',
  templateUrl: './register-navigator.component.html',
  styleUrls: ['./register-navigator.component.scss'],
})
export class RegisterNavigatorComponent implements OnInit {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() previousStep: EventEmitter<any> = new EventEmitter();
  @Input() currentStep = 0;
  @Input() totalSteps = 0;
  @Input() form: FormGroup;
  @Input() steps: Step[];
  constructor() {}

  next() {
    this.nextStep.emit(undefined);
  }

  previous() {
    this.previousStep.emit(undefined);
  }

  get previousStepObject() {
    return this.steps[this.currentStep - 2];
  }

  get nextStepObject() {
    return this.steps[this.currentStep];
  }

  get notFirstPage() {
    return this.currentStep > 1;
  }

  get notLastPage() {
    return this.currentStep < this.totalSteps;
  }

  get isAbleToProceed() {
    return this.form && this.form.valid;
  }

  ngOnInit() {}
}
