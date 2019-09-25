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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import { ConfirmContentComponent } from 'src/app/core/components/confirm-content/confirm-content.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [RegisterComponent, ConfirmContentComponent],
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
