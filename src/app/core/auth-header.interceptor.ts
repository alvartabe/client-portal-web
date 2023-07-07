import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REQUIRES_AUTHENTICATION } from './requires-authentication.token';
import { TokenValidationService } from '@app/core/token-validation.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor(private tokenValidationService: TokenValidationService) {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.tokenValidationService.token && request.context.get(REQUIRES_AUTHENTICATION)) {
            // add authorization header with bearer auth token if available
            request = request.clone({
                setHeaders: {
                    authorization: `Bearer ${this.tokenValidationService.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
