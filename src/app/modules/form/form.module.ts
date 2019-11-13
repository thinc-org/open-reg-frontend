import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterNavigatorComponent } from './components/register-navigator/register-navigator.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterConfirmComponent } from './components/register-confirm/register-confirm.component';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { markedOptionsFactory } from './markdown.options';
import { RegisterTermComponent } from './components/register-term/register-term.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/form-input/error-message/error-message.component';

@NgModule({
  declarations: [
    FormComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
    RegisterConfirmComponent,
    RegisterTermComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    TranslateModule,
    NgxStronglyTypedFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
  ],
  exports: [
    FormComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
  ],
})
export class FormModule {}
