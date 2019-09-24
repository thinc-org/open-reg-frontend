import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  NzButtonModule,
  NzTypographyModule,
  NzStepsModule,
} from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
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
=======
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [RegisterComponent],
>>>>>>> upstream/dev
  imports: [
    NgxStronglyTypedFormsModule,
    ReactiveFormsModule,
    CommonModule,
    CoreModule,
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
        deps: [HttpClient],
      },
    }),
  ],
})
export class RegisterModule {}
