import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormService } from './form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit, OnDestroy {
  currentStep$ = this.formService.currentStep$;

  @Output() submitForm = new EventEmitter<any>();
  @Input() formObj: any = {};

  constructor(private router: Router, private formService: FormService) {}

  ngOnInit() {}

  debug() {
    // console.log(
    //   this.registerService.questions$.value,
    //   this.steps,
    //   this.form,
    //   this.registerService.questions$,
    //   'debug'
    // );
  }

  get eventName() {
    return this.formService.eventName;
  }

  get form() {
    return this.formService.form;
  }

  get steps() {
    return this.formService.groups;
  }

  get currentStepType() {
    const isLastStep =
      this.formService.currentStep$.value === this.steps.length;
    if (isLastStep) {
      return 'confirm';
    } else if (this.formService.questions$.value[0]) {
      return 'form';
    }
    return 'loading';
  }

  get currentStepObj() {
    return this.steps[this.currentStep$.value - 1]
      ? this.steps[this.currentStep$.value - 1]
      : { title: null, description: null, n: 1 };
  }

  get currentFormObj() {
    return this.form ? this.form.controls[this.currentStep$.value - 1] : null;
  }

  get totalSteps() {
    return this.steps.length;
  }

  completeForm() {
    /* Normalize form object from steps **/
    const value = Object.values(this.form.value).reduce(
      (a, c) => ({ ...a, ...c }),
      {}
    );
    console.log(value);
    this.router.navigate(['/']);
  }
  nextStep() {
    if (this.currentStep$.value === this.totalSteps) {
      this.completeForm();
    } else {
      this.currentStep$.next(this.currentStep$.value + 1);
    }
  }

  previousStep() {
    this.currentStep$.next(this.currentStep$.value - 1);
  }

  ngOnDestroy() {
    this.formService.complete();
  }
}
