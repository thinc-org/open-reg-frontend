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

  //Steps
  steps: Step[] = [
    {
      title: 'First Step',
      description: 'Basic Info'
    },
    {
      title: 'Second Step',
      description: 'More Info'
    },
    {
      title: 'Final Step',
      description: 'Lots of more info'
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

interface Step {
  title: string;
  subtitle?: string;
  description: string;
}
