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
  NzIconModule
} from 'ng-zorro-antd';

@NgModule({
  declarations: [
    ArrowTextComponent,
    ContentContainerComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
    TopicComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzTypographyModule,
    NzStepsModule,
    NzInputModule,
    NzGridModule,
    NzLayoutModule,
    NzIconModule
  ],
  entryComponents: [],
  exports: [
    ArrowTextComponent,
    ContentContainerComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
    TopicComponent
  ]
})
export class CoreModule {}
