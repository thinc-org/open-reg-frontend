import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxStronglyTypedFormsModule,
    CoreModule,
  ],
})
export class LoginModule {}
