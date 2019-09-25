
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { SvgComponent } from './components/svg/svg.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { ResultComponent } from './components/result/result.component';
import { DimensionDirective } from './directives/dimension.directive';

@NgModule({
  declarations: [
    ArrowTextComponent,
    ContentContainerComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
    TopicComponent,
    NavbarComponent,
    SvgComponent,
    SvgDefinitionsComponent,
    ResultComponent,
    DimensionDirective
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
  exports: [
    ArrowTextComponent,
    ContentContainerComponent,
    FormInputComponent,
    RegisterFormComponent,
    RegisterNavigatorComponent,
    TopicComponent,
    NavbarComponent,
    SvgComponent,
    SvgDefinitionsComponent,
    ResultComponent,
    DimensionDirective

  ],
})
export class CoreModule {}
