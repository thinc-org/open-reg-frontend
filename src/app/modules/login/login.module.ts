import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import {
  NzInputModule,
  NzTypographyModule,
  NzButtonModule,
  NzFormModule,
  NzCheckboxModule,
  NzAlertModule,
} from 'ng-zorro-antd';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxStronglyTypedFormsModule,
    NzInputModule,
    NzTypographyModule,
    NzButtonModule,
    NzFormModule,
    NzCheckboxModule,
    NzAlertModule,
  ],
})
export class LoginModule {}
