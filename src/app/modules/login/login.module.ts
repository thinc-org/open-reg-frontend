import { DimensionDirective } from './../../core/directives/dimension.directive';
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
  NzCheckboxModule
} from 'ng-zorro-antd';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { TopicComponent } from 'src/app/core/components/topic/topic.component';
import { SvgComponent } from 'src/app/core/components/svg/svg.component';
import { SvgDefinitionsComponent } from 'src/app/core/components/svg-definitions/svg-definitions.component';

@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    TopicComponent,
    SvgComponent,
    SvgDefinitionsComponent,
    DimensionDirective
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
    NzCheckboxModule
  ]
})
export class LoginModule {}
