import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrowTextComponent } from './components/arrow-text/arrow-text.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { RegisterNavigatorComponent } from './components/register-navigator/register-navigator.component';
import { TopicComponent } from './components/topic/topic.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {
  NzButtonModule,
  NzTypographyModule,
  NzStepsModule,
  NzInputModule,
  NzGridModule,
  NzLayoutModule,
  NzIconModule,
  NzModalModule,
} from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from './services/api.service';
import { MockApiService } from './services/mock-api.service';

@NgModule({
  declarations: [
    ArrowTextComponent,
    ContentContainerComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
    TopicComponent,
  ],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    NzButtonModule,
    NzModalModule,
    NzTypographyModule,
    NzStepsModule,
    NzInputModule,
    NzGridModule,
    NzLayoutModule,
    NzIconModule,
  ],
  entryComponents: [],
  providers: [{ provide: ApiService, useClass: MockApiService }],
  exports: [
    ArrowTextComponent,
    ContentContainerComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
    TopicComponent,
  ],
})
export class CoreModule {}
