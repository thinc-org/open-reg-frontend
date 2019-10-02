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
import { CoreModule } from 'src/app/core/core.module';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [RegisterComponent],
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
    FormModule,
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
