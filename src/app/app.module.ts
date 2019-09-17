import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import localeTh from '@angular/common/locales/th';
// Localization
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { GlobalErrorHandler } from './core/global-error-handler.service';
import { ServerErrorInterceptor } from './core/services/server-error.interceptor';
import {
  NgZorroAntdModule,
  NZ_I18N,
  en_US,
  NzButtonModule,
  NzTypographyModule
} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import en from '@angular/common/locales/en';
import { CoreModule } from './core/core.module';

registerLocaleData(localeTh, 'th');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxStronglyTypedFormsModule
  ],
  exports: [TranslateModule],
  providers: [
    TranslateService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
