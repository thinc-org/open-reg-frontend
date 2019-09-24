import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  isSSOAuthenticated$ = this.chulaSSOService.isSSOAuthenticated$;
<<<<<<< HEAD
  currentStep$ = this.registerService.currentStep$;
=======
  questions = [0, 0, 0, 0, 0].map((_, i) => {
    i += 1;
    return new TextboxQuestion({
      description: `something ${i}`,
      key: `question ${i}`,
      label: `label ${i}`,
      order: i,
      validators: [Validators.required, Validators.email],
      title: `QUESTION ${i}`,
      value: `prefilled value`,
    });
  });
  // Steps
  steps: Step[] = [
    {
      title: 'First Step',
      subtitle: 'Basic Info',
    },
    {
      title: 'Second Step',
      subtitle: 'More Info',
    },
    {
      title: 'Final Step',
      subtitle: 'Lots of more info',
    },
  ];
  currentStep$ = new BehaviorSubject<number>(0);
  totalSteps = this.steps.length;
>>>>>>> upstream/dev

  constructor(
    private chulaSSOService: ChulaSsoService,
    private router: Router,
    private registerService: RegisterService
  ) {}

  ngOnInit() {}

  debug() {
    // console.log(this.registerService.questions$.value, this.steps, this.form, this.registerService.questions$, 'debug')
  }

  get form() {
    return this.registerService.form;
  }

  get steps() {
    return this.registerService.groups;
  }

  get currentStepType() {
    const isLastStep =
      this.registerService.currentStep$.value === this.steps.length;
    if (isLastStep) {
      return 'confirm';
    } else if (this.registerService.questions$.value[0]) {
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
    return this.form
      ? this.form.controls[this.currentStep$.value - 1]
      : null;
  }

  get totalSteps() {
    return this.steps.length;
  }

  loginSSO() {
    this.chulaSSOService.login();
  }
  logoutSSO() {
    this.chulaSSOService.logout();
  }

  nextStep() {
    if (this.currentStep$.value === this.totalSteps) {
      this.router.navigate(['/attend']);
    } else {
      this.currentStep$.next(this.currentStep$.value + 1);
    }
  }

  previousStep() {
    this.currentStep$.next(this.currentStep$.value - 1);
  }

  ngOnDestroy() {
    this.registerService.complete();
  }
}
