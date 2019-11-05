import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterNavigatorComponent } from './components/register-navigator/register-navigator.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import {
  NzButtonModule,
  NzModalModule,
  NzTypographyModule,
  NzStepsModule,
  NzInputModule,
  NzGridModule,
  NzLayoutModule,
  NzIconModule,
  NzSelectModule,
  NzRadioModule,
} from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterConfirmComponent } from './components/register-confirm/register-confirm.component';

import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [
    FormComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
    RegisterConfirmComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    TranslateModule,
    NgxStronglyTypedFormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzModalModule,
    NzTypographyModule,
    NzStepsModule,
    NzInputModule,
    NzGridModule,
    NzLayoutModule,
    NzIconModule,
    NzSelectModule,
    NzRadioModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    FormComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
  ],
})
export class FormModule {}
