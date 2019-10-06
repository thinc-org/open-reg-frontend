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
} from 'ng-zorro-antd';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
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
    CoreModule
  ],
})
export class LoginModule {}
