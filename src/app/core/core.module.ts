import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { MockApiService } from './services/mock-api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  entryComponents: [],
  providers: [{provide: ApiService, useClass: MockApiService}]
})
export class CoreModule {}
