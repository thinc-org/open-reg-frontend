import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'register-navigator',
  templateUrl: './register-navigator.component.html',
  styleUrls: ['./register-navigator.component.scss']
})
export class RegisterNavigatorComponent implements OnInit {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() previousStep: EventEmitter<any> = new EventEmitter();
  @Input() currentStep = 0;
  @Input() totalSteps = 0;
  constructor() { }

  next() {
    this.nextStep.emit(undefined);
  }

  previous() {
    this.previousStep.emit(undefined);
  }

  get notFirstPage() { 
    return this.currentStep > 0; 
  }

  get notLastPage() { 
    return this.currentStep < this.totalSteps - 1;
  }

  ngOnInit() {
  }

}
