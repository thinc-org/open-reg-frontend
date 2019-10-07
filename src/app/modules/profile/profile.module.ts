import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import {
  NzButtonModule,
  NzTypographyModule,
  NzStepsModule,
  NzInputModule,
  NzGridModule,
  NzLayoutModule,
  NzIconModule,
} from 'ng-zorro-antd';
import { FormModule } from '../form/form.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxStronglyTypedFormsModule,
    ReactiveFormsModule,
    CommonModule,
    CoreModule,
    NzButtonModule,
    NzTypographyModule,
    NzStepsModule,
    NzInputModule,
    NzGridModule,
    NzLayoutModule,
    NzIconModule,
    FormsModule,
    FormModule,
    TranslateModule,
  ],
})
export class ProfileModule {}
