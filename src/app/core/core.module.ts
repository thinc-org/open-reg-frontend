import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowTextComponent } from './components/arrow-text/arrow-text.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { TopicComponent } from './components/topic/topic.component';
import {
  NzButtonModule,
  NzTypographyModule,
  NzStepsModule,
  NzInputModule,
  NzGridModule,
  NzLayoutModule,
  NzIconModule,
  NzModalModule,
  NzSelectModule,
  NzRadioModule,
} from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SwapDirective } from './directives/swap.directive';
import { ConfirmContentComponent } from './components/confirm-content/confirm-content.component';

@NgModule({
  declarations: [
    ArrowTextComponent,
    ContentContainerComponent,
    TopicComponent,
    SwapDirective,
    ConfirmContentComponent,
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
    NzSelectModule,
    NzRadioModule,
  ],
  entryComponents: [],
  // providers: [{ provide: ApiService, useClass: MockApiService }],
  exports: [
    ArrowTextComponent,
    ContentContainerComponent,
    TopicComponent,
    ConfirmContentComponent,
  ],
})
export class CoreModule {}
