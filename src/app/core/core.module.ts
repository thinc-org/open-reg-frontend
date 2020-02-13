import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowTextComponent } from './components/arrow-text/arrow-text.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { TopicComponent } from './components/topic/topic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SwapDirective } from './directives/swap.directive';
import { ConfirmContentComponent } from './components/confirm-content/confirm-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SvgComponent } from './components/svg/svg.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { ResultComponent } from './components/result/result.component';
import { DimensionDirective } from './directives/dimension.directive';
import { RouterModule } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ArrowTextComponent,
    ContentContainerComponent,
    TopicComponent,
    SwapDirective,
    ConfirmContentComponent,
    NavbarComponent,
    SvgComponent,
    SvgDefinitionsComponent,
    ResultComponent,
    DimensionDirective,
    SpinnerComponent,
  ],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    RouterModule,
    StorageServiceModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [],
  // providers: [{ provide: ApiService, useClass: MockApiService }],
  exports: [
    ArrowTextComponent,
    ContentContainerComponent,
    TopicComponent,
    SwapDirective,
    ConfirmContentComponent,
    NavbarComponent,
    SvgComponent,
    SvgDefinitionsComponent,
    ResultComponent,
    DimensionDirective,
    SpinnerComponent,
  ],
})
export class CoreModule {}
