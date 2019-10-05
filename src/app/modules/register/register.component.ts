import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { RegisterService } from './register.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService],
})
export class RegisterComponent implements OnInit, OnDestroy {
  isAuthenticated$ = of(true);
  constructor(private chulaSSOService: ChulaSsoService) {}

  ngOnInit() {}

  loginSSO() {
    this.chulaSSOService.login();
  }

  logoutSSO() {
    this.chulaSSOService.logout();
  }
  ngOnDestroy() {}
}
