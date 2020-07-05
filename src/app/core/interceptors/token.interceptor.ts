import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticatedService } from '../services/authenticated.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authenticateService: AuthenticatedService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const result = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticateService.getToken()}`,
      },
    });
    return next.handle(result);
  }
}
