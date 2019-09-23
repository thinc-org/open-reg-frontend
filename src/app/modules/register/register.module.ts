import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  NzButtonModule,
  NzTypographyModule,
  NzStepsModule
} from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RegisterFormComponent } from 'src/app/core/components/register-form/register-form.component';
import { FormInputComponent } from 'src/app/core/components/form-input/form-input.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RegisterNavigatorComponent } from 'src/app/core/components/register-navigator/register-navigator.component';
import { ContentContainerComponent } from 'src/app/core/components/content-container/content-container.component';
import { ArrowTextComponent } from 'src/app/core/components/arrow-text/arrow-text.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TopicComponent } from 'src/app/core/components/topic/topic.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ConfirmContentComponent } from 'src/app/core/components/confirm-content/confirm-content.component';
import { SwapDirective } from 'src/app/core/directives/swap.directive';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    FormInputComponent,
    RegisterNavigatorComponent,
    ContentContainerComponent,
    ArrowTextComponent,
    TopicComponent,
    ConfirmContentComponent,
    SwapDirective
  ],
  imports: [
    NgxStronglyTypedFormsModule,
    ReactiveFormsModule,
    CommonModule,
    RegisterRoutingModule,
    NzButtonModule,
    NzTypographyModule,
    NzStepsModule,
    NzInputModule,
    NzGridModule,
    NzLayoutModule,
    NzIconModule,
    NzSelectModule,
    NzRadioModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class RegisterModule {}
