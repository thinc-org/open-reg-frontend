import { Component, OnInit } from '@angular/core';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSSOAuthenticated$ = this.chulaSSOService.isSSOAuthenticated$;
  questions = ['test', 'test2', 'test3', 'test4', 'test5'];
  //Steps
  steps: Step[] = [
    {
      title: 'First Step',
      subtitle: 'Basic Info'
    },
    {
      title: 'Second Step',
      subtitle: 'More Info'
    },
    {
      title: 'Final Step',
      subtitle: 'Lots of more info'
    }
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
