import { Component, OnInit } from '@angular/core';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { TextboxQuestion } from 'src/app/core/model/questions.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSSOAuthenticated$ = this.chulaSSOService.isSSOAuthenticated$;
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

  constructor(
    private chulaSSOService: ChulaSsoService,
    private router: Router
  ) {}

  ngOnInit() {}

  loginSSO() {
    this.chulaSSOService.login();
  }
  logoutSSO() {
    this.chulaSSOService.logout();
  }

  nextStep() {
    if (this.currentStep$.value === this.totalSteps - 1) {
      this.router.navigate(['/attend']);
    } else {
      this.currentStep$.next(this.currentStep$.value + 1);
    }
  }

  previousStep() {
    this.currentStep$.next(this.currentStep$.value - 1);
  }
}

export interface Step {
  title: string;
  subtitle: string;
}
