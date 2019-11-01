/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ApiConfiguration,
  ApiConfigurationInterface,
} from './api-configuration';

import { ApiService } from './services/api.service';
import { MockApiService } from '../core/services/mock-api.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    ApiConfiguration,
    { provide: ApiService, useClass: MockApiService },
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: { rootUrl: customParams.rootUrl },
        },
      ],
    };
  }
}
