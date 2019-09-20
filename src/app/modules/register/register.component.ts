import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  isSSOAuthenticated$ = this.chulaSSOService.isSSOAuthenticated$;
  currentStep$ = new BehaviorSubject<number>(0);
  totalSteps = this.steps.length;

  constructor(
    private chulaSSOService: ChulaSsoService,
    private router: Router,
    private registerService: RegisterService,
  ) {}

  ngOnInit() {
  }
  
  debug() {
    console.log(this.questions$.value, this.steps, this.form, this.questions$, 'debug')
  }

  get form() {
    return this.registerService.form;
  }

  get questions$() {
    return this.registerService.questions$;
  }

  get steps() {
    return this.registerService.groups;
  }

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

  ngOnDestroy() {
    this.registerService.complete();
  }
}
