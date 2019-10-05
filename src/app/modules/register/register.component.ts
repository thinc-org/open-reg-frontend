import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChulaSsoService } from 'src/app/core/services/chula-sso.service';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private chulaSSOService: ChulaSsoService) {}

  ngOnInit() {}

  loginSSO() {
    this.chulaSSOService.login();
  }

  ngOnDestroy() {}
}
